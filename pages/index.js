import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Hunter</title>
        <meta name="description" content="Code hunter is helps to learn new coding skills || problem solved methods || bugs detecting methods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <ul >
          <Link href='/'><a><li>Home</li></a></Link>
          <Link href='/blog'><a><li>Blogs</li></a></Link>
          <Link href='/services'><a><li>Services</li></a></Link>
          <Link href='/about'><a><li>About Us</li></a></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Code Hunter
        </h1>

        <p className={styles.description}>
          Code hunter is helping to <b>Learn</b> new <b>Skills</b>, problem solve methods , catching methods
        </p>

        <div className="blogs">
          <h1>Learn by Blogs</h1>
          <div className="blogitem">
            <h3>Learn javaScript</h3>
            <p>Javascirpt is a machine understandable language which was used to design the website</p>
          </div>
          <div className="blogitem">
            <h3>Learn javaScript</h3>
            <p>Javascirpt is a machine understandable language which was used to design the website</p>
          </div>
          <div className="blogitem">
            <h3>Learn javaScript</h3>
            <p>Javascirpt is a machine understandable language which was used to design the website</p>
          </div>
          <div className="blogitem">
            <h3>Learn javaScript</h3>
            <p>Javascirpt is a machine understandable language which was used to design the website</p>
          </div>
          <div className="blogitem">
            <h3>Learn javaScript</h3>
            <p>Javascirpt is a machine understandable language which was used to design the website</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
