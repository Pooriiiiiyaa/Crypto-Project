import styles from "../layout/Layout.module.css"
import { CiHeart } from "react-icons/ci";
function Layout({children}) {
  return (
    <div>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <p><a href="#">KodeHero</a> | React.js Course</p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Develop By Pooriya <span><CiHeart fontSize="1rem" fill="#fff"/></span></p>
        </footer>
    </div>
  )
}

export default Layout