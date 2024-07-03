import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch('https://admin.aliwehbedu.com/v1_0_0-main/get-news');
  const jsonData = await res.json();
  const newsData = jsonData.data; 

  return {
    props: { news: newsData }
  }
}



const News = ({ news }) => {


  return (
    <>
    <Head>
        <title>Aliwehbedu | News</title>
        <meta name="keywords" content="About"/>
      </Head>
    <div style={{direction: 'rtl'}}>
      <h1>آخر الأخبار</h1>
      {news.map(news => (
        <Link href={'/news/' + news.id} key={news.id}>
          <div className={styles.single}>
            <h3>{ news.title }</h3>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}
 
export default News;