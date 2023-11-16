import styles from "./style.module.css";
const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
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
  );
};

export default Header;
