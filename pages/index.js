import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import Dummy from '../component/dummy'

// import styles1 from '../styles/Home1.module.css'
// import styles2 from '../styles/Home2.module.css'

export default function Home() {
  return (
    <>    
      {/* <style jsx>
        {`
        
       

        `}
      </style> */}
    

      {/* <Dummy/> setting the style jsx of Dummy component as global ,so now we can use css class of dummy component here  */}
     

      <div className={styles.container}>
        <Head>
          <title>Code Hunter</title>
          <meta name="description dummy" content="Code hunter is helps to learn new coding skills || problem solved methods || bugs detecting methods" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        

        <main className={styles.main}>
          {/* <h1 className={styles.title}>
           Code Hunter
          </h1> */}
          <div className={styles.imgdiv}>
          {/* <Image className={styles.imgclass} src="/homeimg.jpg" width={512} height={256}/> */}
  
          {/* <img className={styles.imgclass} src="/homeimg.jpg" alt="Code Hunter"  width={256} height={256} /> */}
          <img className={styles.imgclass} src="/homeimg.jpg" alt="Code Hunter" />

          </div>
          <p className={styles.description}>
            Code hunter is helping to <b>Learn</b> new <b>Skills</b>, Problem solve methods, Bug catching techniques
          </p>

          {/* <div className={`${styles1.con} ${styles2.con}`}> */}
          <div className="blogs">
            <h2>Populer Blogs</h2>
            <div className={styles.blogitem}>
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.blogitem}>
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.blogitem}>
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.blogitem}>
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.blogitem}>
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>

        </main>

        <footer className={styles.footer}>
            www.amanullah@codehunter.com
        </footer>
      </div>
    </>

  )
}
