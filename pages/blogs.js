import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import fs from 'fs'
  // in code ES6
  import InfiniteScroll from 'react-infinite-scroll-component';
  // // or commonjs
  // var InfiniteScroll = require('react-infinite-scroll-component');

// Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and Dispaly them

const Blogs = (props) => {
  // console.log(props.allmyblogs)

  // const [blogsitem,setBlogsitem]= useState([]);
  const [blogsitem,setBlogsitem]= useState(props.allmyblogs);
  // const [blogsitem,setBlogsitem]= useState();

      // useEffect(()=>{
      //   console.log("use effect is running")

      //   fetch(' http://localhost:3000/api/blogs').then((allblogsdata)=>{
      //     return allblogsdata.json();
      //   }).then((blogdata)=>{
      //       setBlogsitem(blogdata)
      //   })
      // },[])

      const [count,setCount] =useState(3)

      const fetchMoreData = async () => {
        
        let allblogss =await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`);
        setCount(count+2)
     let allmyblogss=await allblogss.json();

       setBlogsitem(allmyblogss)
      //  console.log(allmyblogss)


      }

        
  
      

  return (
    <div>
      
      <main className={styles.main}>
          {/* <h2 >
           Dive to Learn
          </h2> */}
         
          <InfiniteScroll
          
          dataLength={blogsitem.length}
          next={fetchMoreData}
          hasMore={blogsitem.length!==props.blogslength}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{textAlign:"center"}}>
              <b>You have seen it all the blogs</b>
            </p>
          }
        >
          {/* {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))} */}
          
          <div className="blogs">
            {blogsitem.map((blogfile)=>{
              return <div className={styles.blogitem} key={blogfile.slug}>
              <Link href={`/blogposts/${blogfile.slug}`}>
              <h3>{blogfile.title}</h3>
              </Link>
              <p>{blogfile.metadesc.substr(0,129)}...</p>
              <Link href={`/blogposts/${blogfile.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
            })}
           
           
          </div>

            </InfiniteScroll>

        </main>


    </div>
  )
}

export async function getStaticProps(context){

 
  let data = await fs.promises.readdir(`blogdata`,'utf-8') 
    
  let blogslength = data.length;
    let allmyblogs=[];

    // for (let index = 0; index < data.length; index++) {
    for (let index = 0; index < 4; index++) {
        const item = data[index];

       const allblogs = await fs.promises.readFile(`blogdata/${item}`,'utf-8')
      
        allmyblogs.push(JSON.parse(allblogs))
        
    }
    

 

  return{
    
    props:{allmyblogs,blogslength}, 
  }
}



// export async function getServerSideProps(context){

 
//     console.log("use effect is running")

//     let allblogs =await fetch(' http://localhost:3000/api/blogs');
//      let allmyblogs=await allblogs.json();
   
 

//   return{
//     // props:{aman:"props is here"}, //will be passed to the page component as props
//     props:{allmyblogs}, //will be passed to the page component as props
//   }
// }

export default Blogs