import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Homepage
} from '../components'
import { TopBar } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wang Yi | Home</title>
        <meta name="description" content="Wang Yi | Senior Developer" />
        <link rel="icon" href="ico/home.ico" />
      </Head>
      <TopBar selectedId={1} />
      <Homepage />
    </div>
  )
}

export default Home
