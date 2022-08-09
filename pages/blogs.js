import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

// Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and Dispaly them

const blogs = () => {
       const [blogsitem,setBlogsitem]= useState([]);
      useEffect(()=>{
        console.log("use effect is running")

        fetch(' http://localhost:3000/api/blogs').then((allblogsdata)=>{
          return allblogsdata.json();
        }).then((blogdata)=>{
            setBlogsitem(blogdata)
        })
      },[])
      // console.log(blogsitem)

  return (
    <div>
      
      <main className={styles.main}>
          <h2 >
           Dive to Learn something <b>New</b>
          </h2>
         

          
          <div className="blogs">
            {blogsitem.map((blogfile)=>{
              return <div className={styles.blogitem} key={blogfile.slug}>
              <Link href='/blogposts/learn javascript in 2022'>
              <h3>{blogfile.title}</h3>
              </Link>
              <p>{blogfile.content.substr(0,129)}...</p>
            </div>
            })}
           
            {/* <div className={styles.blogitem}>
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
            </div> */}
          </div>

        </main>


    </div>
  )
}

export default blogs