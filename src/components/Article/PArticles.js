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
    <>
  






    <div
      className="row "
      style={{
        width: "80%",
        height: "100%",
        textAlign: "center",
        position: "relative",
        margin: "0 auto",
      }}
    >
      {data.map((e) => {
        return (
          <div className="col-8 col-md-6">
            <Card
              style={{ width: "28rem", marginBottom: "20px" }}
              className="border-dark"
            >
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
                  style={{ marginLeft: 10, width: "110px" }}
                >
                  View
                </Button>

                <Button
                  onClick={() => {
                    navigate(`/UpdateArticle/${e.id}`);
                  }}
                  style={{ marginLeft: 10, width: "110px" }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    navigate(`/DeleteArticle/${e.id}`);
                  }}
                  style={{ marginLeft: 10, width: "110px" }}
                >
                  Delete
                </Button>
                {/* </Link */}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default PArticles;
