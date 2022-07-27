import React from "react";
import Cards from "../Categories/Cards";
import PArticles from "../Article/PArticles";
import BookMark from "../BookMark/BookMark.js";
import HomeArticles from "../Article/HomeArticles";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import comp1 from "./comp1.svg";
import comp2 from "./comp2.svg";
import comp3 from "./comp3.svg";
import comp4 from "./comp4.svg";
import Footer from "./Footer";
import SectionText from "./SectionText";
import guide from "./guide.jpeg";


function Home() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  // const accessToken = localStorage.getItem("token");
  // const config = {
  //   headers: { Authorization: `Bearer ${accessToken}` },
  // };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/all_categories/`)
      .then((res) => {
        console.log(res.data.Categories);
        setData(res.data.Categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SectionText />
      {/* <HomeArticles /> */}
      {/* <Cards /> */}

      <br />

      <Carousel style={{ height: "400px", width: "70%", marginLeft: "17%" }}>
        {data.map((e) => {
          return (
            <Carousel.Item interval={2500}>
              <img
                style={{ height: "400px", width: "100%" }}
                className="d-block w-100"
                src={e.image}
                alt="First slide"
                onClick={() => {
                  navigate(`/articlesCategories/${e.id}`);
                }}
              />

              <Carousel.Caption
                style={{
                  position: "absolute",
                  top: " 50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1 style={{ textTransform:'capitalize' }}> {e.name}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    
<div style={{marginBottom:'120px'}}></div>
      <div style={{ height: "200px", width: "70%", marginLeft: "10%" }}>
        <img src={guide} alt='m'></img>
      </div>
      <div style={{marginTop:'180px'}}></div>



      {/* <HomeArticles /> */}

      {/* <HomeArticles /> */}

      <br></br>
      <div className="company">
        <img className="companyImg" src={comp1} alt=' '></img>
        <img
        alt=' '
          className="companyImg"
          src={comp2}
          style={{ marginLeft: "50px" }}
        ></img>
        <img
        alt=' '
          className="companyImg"
          src={comp3}
          style={{ marginLeft: "50px" }}
        ></img>
        <img
        alt=' '
          className="companyImg"
          src={comp4}
          style={{ marginLeft: "50px" }}
        ></img>
      </div>
      <br></br>
    </>
  );
}

export default Home;
