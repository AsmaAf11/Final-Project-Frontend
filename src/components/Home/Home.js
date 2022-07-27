import React from "react";
import Cards from "../Categories/Cards";
import PArticles from "../Article/PArticles";
import BookMark from "../BookMark/BookMark.js";
import HomeArticles from "../Article/HomeArticles";
import comp1 from './comp1.svg'
import comp2 from './comp2.svg'
import comp3 from './comp3.svg'
import comp4 from './comp4.svg'

function Home() {
  return (
    <>
      {/* <HomeArticles /> */}
      <Cards />
      <div className="company">
        <img className="companyImg" src={comp1}></img>
        <img className="companyImg" src={comp2}></img>
        <img className="companyImg" src={comp3}></img>
        <img className="companyImg" src={comp4}></img>
      </div>
      
    </>
  );
}

export default Home;



