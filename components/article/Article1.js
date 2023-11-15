import styles from "./style.module.css";
import auto from "../assets/auto.jpg";
const Article1 = () => {
  return (
    <div className={styles.main}>
      <img src={auto.src} />
      <h6>Images may be subject to copyright. Learn More</h6>
      <h2>The best small cars to buy in 2023</h2>
    </div>
  );
};

export default Article1;
