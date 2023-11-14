import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Type17</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">some link</a>
            </li>
            <li>
              <a href="#">another link</a>
            </li>
            <li>
              <a href="#">third link</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <spam>&#169;</spam>
      </footer>
    </>
  );
};

export default Home;
