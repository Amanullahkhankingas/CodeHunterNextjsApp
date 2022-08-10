// http://localhost:3000/blogposts/how_to_learn_reactjs

import React, { useEffect,useState } from 'react'
import {useRouter} from  'next/router'
import styles from '../../styles/BlogPosts.module.css'
import fs from 'fs'

//Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
const router = useRouter();

// console.log(router.query)

const [blog,setBlog]=useState(props.myblog)
// console.log(blog)


// const [blog,setBlog]=useState()


// useEffect(()=>{


//   console.log('useeffect is working in blogposts slugs')

//   if(!router.isReady) return;
  
//       const {slug} = router.query;

//       fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((titlefiledata=>{

//         return titlefiledata.json();
//       })).then((blogpost)=>{
//         setBlog(blogpost)
//       })


//   },[router.isReady])

  return <div className={styles.container}>
     <div className={styles.container}>
      <h2>{blog && blog.title}</h2>
      <p>{blog && blog.content}</p>
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam id quibusdam quaerat laudantium quo provident odit atque tenetur recusandae dolores, voluptate minus laboriosam eaque suscipit doloremque esse, labore similique? Inventore aut non, temporibus dicta ullam ratione aspernatur esse perferendis, velit ducimus ab fuga nesciunt voluptatem enim quos. Tempore ab reprehenderit iste ducimus aliquid id!</p> */}
     </div>
         
         
         </div>

}

export async function getStaticPaths() {
  return {
    paths:[
      {params:{slug: "how_to_learn_javascript"}},
      {params:{slug: "how_to_learn_nextjs"}},
      {params:{slug: "how_to_learn_reactjs"}},
    ],
    fallback:true //falls or 'blocking'
  };
}



export async function getStaticProps(context){

   const {slug} = context.params
  //  console.log(context)

  let data =await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
  let myblog =await JSON.parse(data)

return{
  props:{myblog}, 
}
}


// export async function getServerSideProps(context){
// // console.log(context.query)
//   const {slug} = context.query;
//   let blog =await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//    let myblog=await blog.json();
 


// return{
//   // props:{aman:"props is here"}, //will be passed to the page component as props

//   props:{myblog}, 
// }
// }

export default Slug
