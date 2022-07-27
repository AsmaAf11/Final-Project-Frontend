import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button, Row } from "react-bootstrap";

function Cards() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
    <div className="row " style={{width:'80%',height:'100%',textAlign:'center',position:'relative',margin:'0 auto'}}>
      {data.map((e) => {
        return (
          <div className="col-8 col-md-6">
            <div
              onClick={() => {
                navigate(`/articlesCategories/${e.id}`);
              }}
            >
            {/* <Card style={{width:'100%',height:'100px',display:'inline-block',lineHeight:'100px',backgroundColor:'white',marginBottom:'30px'}}className="border-dark"> */}
              <Card style={{ width: "28rem" ,  marginBottom:'20px'}} className="border-dark">
                <Card.Img
                  style={{ width: "100%", height: "350px" }}
                  variant="top"
                  src={e.image}
                />
                <Card.Body>
                  <Card.Title className="cardTitleText">{e.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
