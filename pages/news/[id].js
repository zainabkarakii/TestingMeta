import styles from '../../styles/Ninjas.module.css'; 
import Head from 'next/head'

export const getStaticPaths = async () => {
  const res = await fetch('https://admin.aliwehbedu.com/v1_0_0-main/get-news');
  const jsonData = await res.json();
  const data = jsonData.data;

  const paths = data.map(news => {
    return {
      params: { id: news.id.toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://admin.aliwehbedu.com/v1_0_0-main/get-news?id=${id}`);

  const text = await res.text();

  try {
    const jsonData = JSON.parse(text);

    if (!jsonData.success) {
      throw new Error('API returned an error');
    }

    const data = jsonData.data[0];

    return {
      props: { news: data }
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return {
      props: { news: null }
    }
  }
}

const Details = ({ news }) => {
  if (!news) {
    return <div>Error loading news</div>;
  }

  return (
    <>
      <Head>
        <title>{news.title}</title>
        <meta name="keywords" content={news.title} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.content.substring(0, 150)} />
        <meta property="og:image" content={`https://admin.aliwehbedu.com${news.main_image}`} />
        <meta property="og:type" content="article" />
      </Head>
      <div style={{ direction: 'rtl' }} className={styles.container}>
        <img src={`https://admin.aliwehbedu.com${news.main_image}`} alt={news.title} className={styles.newsImage} />
        <h1>{news.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
      </div>
    </>
  );
}

export default Details;
