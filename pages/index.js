import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Workspace from './container/Workspace'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo</title>
      </Head>
          <Workspace/>
    </div>
  )
}
