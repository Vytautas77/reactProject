import styles from "./style.module.css";

const Article = ({ title, subTitle, imgUrl }) => {
  return (
    <div className={styles.main}>
      <img src={imgUrl} />
      <h6>{subTitle}</h6>
      <h2>{title}</h2>
    </div>
  );
};

export default Article;
