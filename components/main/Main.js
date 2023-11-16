import { useState } from "react";

import Article from "../article/Article";
import Article1 from "../article/Article1";
import styles from "./style.module.css";

const Main = ({ article, isArticle, isArticle1 }) => {
  // const [articleTitle, setArticleTitle] = useState(
  //   "The best small cars to buy in 2023"
  // );
  // const [articleSubTitle, setArticleSubTitle] = useState(
  //   "Images may be subject to copyright. Learn More"
  // );

  // const article = [
  //   {
  //     title: "The best small cars to buy in 2023",
  //     subTitle: "Images may be subject to copyright. Learn More",
  //     imgUrl:
  //       "https://parkers-images.bauersecure.com/wp-images/18290/930x620/90-vauxhall-corsa-electric-best-small-cars.jpg",
  //   },
  //   {
  //     title: "These Are the Cars of the Future",
  //     subTitle: "At Californias Pebble Beach Concours dElegance",
  //     imgUrl:
  //       "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
  //   },
  //   {
  //     title: "Top 10 best super-luxury cars 2023",
  //     subTitle:
  //       "If Scrooge McDuck were paying, which car would he be buying in 2023",
  //     imgUrl:
  //       "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx",
  //   },
  //   {
  //     title: "Coolest Family Cars in 2023 ",
  //     subTitle: "Who said family cars can't be cool?",
  //     imgUrl:
  //       "https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
  //   },
  // ];
  return (
    <main className={styles.main}>
      <div className={styles.leftBox}>
        <Article
          title={article[0].title}
          subTitle={article[0].subTitle}
          imgUrl={article[0].imgUrl}
          isArticle={isArticle}
        />
        <Article
          title={article[1].title}
          subTitle={article[1].subTitle}
          imgUrl={article[1].imgUrl}
          isArticle={isArticle}
        />
      </div>
      <div className={styles.rightBox}>
        <Article1
          title={article[2].title}
          subTitle={article[2].subTitle}
          imgUrl={article[2].imgUrl}
          isArticle1={isArticle1}
        />
        <Article1
          title={article[3].title}
          subTitle={article[3].subTitle}
          imgUrl={article[3].imgUrl}
          isArticle1={isArticle1}
        />
      </div>
    </main>
  );
};
export default Main;
