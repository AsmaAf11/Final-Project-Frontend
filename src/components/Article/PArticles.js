import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";

function PArticles() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    axios
      .get(`http://127.0.0.1:8000/posted_articles_per_publisher/`, config)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/posted_articles_per_publisher/`)
  //     .then((res) => {
  //       console.log(res.data.Articles);
  //       // setData(res.data.Articles);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div> 
      <h3>My Articles</h3>
      {data.map((e) => {
        return (
          <Container className="pt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "350px" }}
                variant="top"
                src={e.image}
              />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                {/* <Link to="/articlesCategories" > */}
                <Button
                  onClick={() => {
                    navigate(`/ViewDetails/${e.id}`);
                  }}
                >
                  View Articles
                </Button>
                {/* </Link */}
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  );
}

export default PArticles;
