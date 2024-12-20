import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header>

    <nav>
      <div className="logo">
        <h2>Quickly.</h2>
      </div>
      <div className="hrefs">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Our Blogs</a></li>
          <li><a href="#">Downloads</a></li>
        </ul>
      </div>
      <div className={styles.btns}>
            <button className={styles.sign}>Sign Up</button>
            <button className={styles.log}>Log In</button>
          </div>
    </nav>
  </header>
  )
}

export default Header