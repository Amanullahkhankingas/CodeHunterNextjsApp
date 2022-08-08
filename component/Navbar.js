import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
          <ul >
            <Link href='/'><a><li>Home</li></a></Link>
            <Link href='/blogs'><a><li>Blogs</li></a></Link>
            <Link href='/services'><a><li>Services</li></a></Link>
            <Link href='/about'><a><li>About Us</li></a></Link>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
