import Article from "../article/Article";
import Article1 from "../article/Article1";
import styles from "./style.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.leftBox}>
        <Article />
        <Article />
      </div>
      <div className={styles.rightBox}>
        <Article1 />
        <Article1 />
      </div>
    </main>
  );
};
export default Main;
