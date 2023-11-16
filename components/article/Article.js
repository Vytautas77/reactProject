import { useState } from "react";
import styles from "./style.module.css";

const Article = ({ title, subTitle, imgUrl }) => {
  const [isArticle, setIsArticle] = useState(true);
  return (
    <>
      {isArticle && (
        <div className={styles.main}>
          <img src={imgUrl} />
          <h6>{subTitle}</h6>
          <h2>{title}</h2>
        </div>
      )}
    </>
  );
};

export default Article;
