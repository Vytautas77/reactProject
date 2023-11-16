import { useState } from "react";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";
import FooterX from "@/components/footerX/FooterX";

const Home = () => {
  const [logo, setLogo] = useState("Type17");
  const [isArticle, setIsArticle] = useState(false);

  const article = [
    {
      title: "The best small cars to buy in 2023",
      subTitle: "Images may be subject to copyright. Learn More",
      imgUrl:
        "https://parkers-images.bauersecure.com/wp-images/18290/930x620/90-vauxhall-corsa-electric-best-small-cars.jpg",
    },
    {
      title: "These Are the Cars of the Future",
      subTitle: "At Californias Pebble Beach Concours dElegance",
      imgUrl:
        "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
    },
    {
      title: "Top 10 best super-luxury cars 2023",
      subTitle: "Which car would he be buying in 2023",
      imgUrl:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx",
    },
    {
      title: "Coolest Family Cars in 2023 ",
      subTitle: "Who said family cars can't be cool?",
      imgUrl:
        "https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
    },
  ];

  return (
    <>
      <button
        onClick={() => {
          setLogo("Type15");
        }}
      >
        Click
      </button>
      <Header logo={logo} />
      <Main article={article} />
      <Footer />
      <FooterX />
    </>
  );
};

export default Home;
