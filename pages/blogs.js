import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

// Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and Dispaly them

const blogs = (props) => {
  // console.log(props.allmyblogs)

  // const [blogsitem,setBlogsitem]= useState([]);
  const [blogsitem,setBlogsitem]= useState(props.allmyblogs);

      // useEffect(()=>{
      //   console.log("use effect is running")

      //   fetch(' http://localhost:3000/api/blogs').then((allblogsdata)=>{
      //     return allblogsdata.json();
      //   }).then((blogdata)=>{
      //       setBlogsitem(blogdata)
      //   })
      // },[])
      

  return (
    <div>
      
      <main className={styles.main}>
          <h2 >
           Dive to Learn something <b>New</b>
          </h2>
         

          
          <div className="blogs">
            {blogsitem.map((blogfile)=>{
              return <div className={styles.blogitem} key={blogfile.slug}>
              <Link href={`/blogposts/${blogfile.slug}`}>
              <h3>{blogfile.title}</h3>
              </Link>
              <p>{blogfile.content.substr(0,129)}...</p>
            </div>
            })}
           
           
          </div>

        </main>


    </div>
  )
}

export async function getServerSideProps(context){

 
    console.log("use effect is running")

    let allblogs =await fetch(' http://localhost:3000/api/blogs');
     let allmyblogs=await allblogs.json();
   
 

  return{
    // props:{aman:"props is here"}, //will be passed to the page component as props
    props:{allmyblogs}, //will be passed to the page component as props
  }
}

export default blogs