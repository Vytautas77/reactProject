import styles from "./style.module.css";
const Header = ({
  logo,
  setIsArticle,
  isArticle,
  setIsArticle1,
  isArticle1,
}) => {
  const leftBoxLinkClick = () => {
    setIsArticle(!isArticle);
  };
  const rightBoxLinkClick = () => {
    setIsArticle1(!isArticle1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#" onClick={leftBoxLinkClick}>
              Left box
            </a>
          </li>
          <li>
            <a href="#" onClick={rightBoxLinkClick}>
              Right box
            </a>
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
