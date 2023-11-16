import { useState } from "react";
import styles from "./style.module.css";
const Article1 = ({ title, subTitle, imgUrl, isArticle1 }) => {
  return (
    <>
      {isArticle1 && (
        <div className={styles.main}>
          <img src={imgUrl} />
          <h6>{subTitle}</h6>
          <h2>{title}</h2>
        </div>
      )}
    </>
  );
};

export default Article1;
