import React from 'react'
import {useRouter} from  'next/router'
import styles from '../../styles/BlogPosts.module.css'

const slug = () => {
const router = useRouter();
const {slug} = router.query;
// console.log(router.query)

  // return <div>{slug} </div>

  return <div className={styles.container}>
     <div className={styles.container}>
      <h2>the title of the page: {slug}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam id quibusdam quaerat laudantium quo provident odit atque tenetur recusandae dolores, voluptate minus laboriosam eaque suscipit doloremque esse, labore similique? Inventore aut non, temporibus dicta ullam ratione aspernatur esse perferendis, velit ducimus ab fuga nesciunt voluptatem enim quos. Tempore ab reprehenderit iste ducimus aliquid id!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam id quibusdam quaerat laudantium quo provident odit atque tenetur recusandae dolores, voluptate minus laboriosam eaque suscipit doloremque esse, labore similique? Inventore aut non, temporibus dicta ullam ratione aspernatur esse perferendis, velit ducimus ab fuga nesciunt voluptatem enim quos. Tempore ab reprehenderit iste ducimus aliquid id!</p>
     </div>
         
         
         </div>

}

export default slug
