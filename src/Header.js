import React from "react"
import styles from "./assets/css/Header.module.css"

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <a href="/" className={styles.logo}>
        <strong>Markdown Editor</strong> by React
      </a>
      <div className={styles.icon}>
        <a href="#" className={styles.pict} class="fab fa-twitter"></a>
        <a href="#" className={styles.pict} class="fab fa-facebook-f"></a>
        <a href="#" className={styles.pict} class="fab fa-google"></a>
        <a href="#" className={styles.pict} class="fab fa-instagram-square"></a>
        <a href="#" className={styles.pict} class="fab fa-slack"></a>
      </div>
    </div>
  )
}

export default Header