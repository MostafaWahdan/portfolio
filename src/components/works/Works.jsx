import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/prosper-explore.webp",
      title: "Data Analysis",
      desc:
        "In this project, I explored Prosper loans' dataset and gained interesting insights. This dataset contains 113,937 loans with 81 variables on each loan.",
      img:
        "./assets/explore.png",
      link:
        "https://github.com/MostafaWahdan/Prosper-Loan-Project"
    },
    {
      id: "2",
      icon: "./assets/ab-testing-app.png",
      title: "Analyze A/B Test",
      desc:
        "For this project, I interpreted the results of an A/B test run by an e-commerce website to decide whether they should change the website design.",
      img:
        "./assets/ab-test.png",
      link:
        "https://github.com/MostafaWahdan/Analyze-A-B-Tests"
    },
    {
      id: "3",
      icon: "./assets/scrape-icon.png",
      title: "Web Scraping",
      desc:
        "In this project, I created a web scraper to get movies' data from YTS website. This can be used to automatically track new releases.",
      img:
        "./assets/web-scraping.png",
      link:
        "https://github.com/MostafaWahdan/YTS_Scraper"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>Source Code</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
