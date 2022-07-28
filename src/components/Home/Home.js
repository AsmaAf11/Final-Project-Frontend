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
import guide from "./guide2.jpg";

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
      <div style={{ marginBottom: "100px" }}></div>
      <div className="d-flex justify-content-around">
        <SectionText />
      </div>
      <div style={{ marginTop: "100px" }}></div>

      <br />
      <div>
        <h3 style={{ textTransform: "uppercase" }} className="d-flex justify-content-around mb-5">
          Article Categories
        </h3>
      </div>
      <div className="d-flex justify-content-around">
        <Carousel
          style={{
            height: "400px",
            width: "70%",
          }}
        >
          {data.map((e) => {
            return (
              <Carousel.Item interval={2500}>
                <img
                  style={{ height: "400px", width: "100%", borderRadius: "2%" }}
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
                    top: " 55%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // opacity: "0.75",
                    textTransform: "capitalize",
                  }}
                >
                  <h1
                    style={{
                      textTransform: "capitalize",
                      fontWeight: "bolder",
                      backgroundColor: "rgba(83, 83, 83, 0.664)",
                      padding: "10px 0px 10px 0px",
                    }}
                  >
                    {" "}
                    {e.name}
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div style={{ marginBottom: "120px" }}></div>
      <div className="d-flex justify-content-around">
        <img src={guide} alt="guide"></img>
      </div>
      <div style={{ marginTop: "100px" }}></div>

      <br></br>
      <div className="d-flex justify-content-around">
        <img className="companyImg" src={comp1} alt=" "></img>
        <img
          alt=" "
          className="companyImg"
          src={comp2}
          style={{ marginLeft: "50px" }}
        ></img>
        <img
          alt=" "
          className="companyImg"
          src={comp3}
          style={{ marginLeft: "50px" }}
        ></img>
        <img
          alt=" "
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
