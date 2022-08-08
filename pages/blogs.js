import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const blogs = () => {
  return (
    <div>
      
      <main className={styles.main}>
          <h2 >
           Dive to Learn something <b>New</b>
          </h2>
         

          
          <div className="blogs">
           
            <div className={styles.blogitem}>
              <Link href='/blogposts/learn javascript in 2022'>
              <h3>Learn javaScript in 2022</h3>
              </Link>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
            </div>
            <div className="blogitem">
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
            </div>
            <div className="blogitem">
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
            </div>
            <div className="blogitem">
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
            </div>
            <div className="blogitem">
              <h3>Learn javaScript in 2022</h3>
              <p>Javascirpt is a machine understandable language which was used to design the website</p>
            </div>
          </div>

        </main>


    </div>
  )
}

export default blogs