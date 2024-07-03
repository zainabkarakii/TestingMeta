import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aliwehbedu | Home</title>
        <meta name="keywords" content="Home"/>
        <meta property="og:title" content="Aliwehbedu" />
        <meta property="og:description" content="Stay updated with the latest news from Ali Wehbe. Click to read more!" />
        <meta property="og:image" content="logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <h1 className={styles.title}>Ali Wehbe News</h1>
        <p className={styles.text}>Here you can view the latest news from Ali Wehbe</p>
        <Link href="/news/">
          <div className={styles.btn}>See Latest News</div>
        </Link>
      </div>
    </>
  )
}
