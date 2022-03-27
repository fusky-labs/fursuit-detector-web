import Link from 'next/link'
import styles from '../styles/Home.module.scss'

function AppHeader() {
  return (
    <header>
      <div id={styles.backdrop}></div>
      <h1 id={styles.logo}>Fursuit Detector</h1>
    </header>
  );
}

export default AppHeader;