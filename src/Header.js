import React from "react"
import styles from "./assets/css/Header.module.css"

const Header = () => {
  return (
    <header className="header">
      <a href="/" class="logo">
        <strong>Markdown Editor</strong> by React
      </a>
      <h1 className={styles.header}>hello</h1>
      <div class="icon">
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-google"></a>
        <a href="#" class="fab fa-instagram-square"></a>
        <a href="#" class="fab fa-slack"></a>
      </div>
    </header>
  )
}

export default Header