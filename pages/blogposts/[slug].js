// http://localhost:3000/blogposts/how_to_learn_reactjs

import React, { useEffect,useState } from 'react'
import {useRouter} from  'next/router'
import styles from '../../styles/BlogPosts.module.css'
import fs from 'fs'

//Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
const router = useRouter();

/*
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
  */



const [blog,setBlog]=useState(props.myblog)




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


function createMarkup(c) {
  return {__html: c};
}

  return <div>
     <div className={styles.container}>
      <h2>{blog && blog.title}</h2>
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      {/* <p>{blog && blog.content}</p> */}
       </div>
         
         
         </div>

}

// export async function getStaticPaths() {
//   return {
//     paths:[
//       {params:{slug: "how_to_learn_javascript"}},
//       {params:{slug: "how_to_learn_nextjs"}},
//       {params:{slug: "how_to_learn_reactjs"}},
//     ],
//     fallback:true //falls or 'blocking'
//   };
// }

export async function getStaticPaths() {
  let allblo = await fs.promises.readdir('blogdata')
  allblo = allblo.map((item)=>{
    return { params: { slug: item.split(".")[0] }}
  })
   console.log(allblo)
  return {
    paths:allblo,
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
