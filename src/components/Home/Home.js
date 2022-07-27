import React from "react";
import Cards from "../Categories/Cards";
import PArticles from "../Article/PArticles";
import BookMark from "../BookMark/BookMark.js";
import HomeArticles from "../Article/HomeArticles";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
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
    <br/>
 
    <Carousel variant="dark" style={{height:'400px',width:'70%',marginLeft:'250px',marginRight:'100px'}} >
    {data.map((e) => {
        return (
      <Carousel.Item>
        <img style={{height:'400px',width:'100%'}}
          src={e.image}
          alt="First slide"
          onClick={() => {
            navigate(`/articlesCategories/${e.id}`);
          }}
        />
        <Carousel.Caption>
          <h5>{e.name}</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
        )})}
    </Carousel>
      <HomeArticles />
      <Cards />
    </>
  );
}

export default Home;
