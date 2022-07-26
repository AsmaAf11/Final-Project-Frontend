import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PArticles from '../Article/PArticles'
import { Card, Container, Button } from "react-bootstrap";
function BookMark() {
    const [data, setData] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    axios
      .get(`http://127.0.0.1:8000/all_articles/`, config)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div>
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
  )
}

export default BookMark
