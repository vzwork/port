import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Filter from './_blocks/Filter'
import Projects from './_blocks/Projects'
import Vlad from './_blocks/Vlad'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vzwork</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Vlad />
      {/* <Filter /> */}
      <Projects />
    </div>
  )
}
