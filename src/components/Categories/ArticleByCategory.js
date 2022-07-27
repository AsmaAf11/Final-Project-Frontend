import { Card, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import like from "../Home/like.png";

function ArticleByCategory() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posted_articles_per_category/${id}/`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);


  const Search = async (event) => {
    let key = event.target.value;
    axios
      .get(`http://127.0.0.1:8000/search1/?title=${key}`)
      .then((response) => {
        console.log(response.data.Article);
        setData(response.data.Article);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  

  return (
    <>
    <div className="form-field col-lg-2">
      <input
        type=""
        className="search-box"
        placeholder="Search"
        onChange={Search}
      /></div>
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
        {data?.map((e) => {
          return (
            <div className="col-8 col-md-6">
              <Card
                style={{ width: "28rem", marginBottom: "20px" }}
                className="border-light"
              >
                <Card.Img
                  style={{ width: "100%", height: "350px" }}
                  variant="top"
                  src={e.image}
                />
                <Card.Body>
                  <Card.Title className="cardTitleText">{e.title}</Card.Title>
                  <Card.Text className="cardParagraphText">
                    {e.summary}
                  </Card.Text>
                  
                  <Button
                    onClick={() => {
                      navigate(`/ViewDetails/${e.id}`);
                    }}
                  >
                    View Articles
                  </Button>
                  <Card.Footer className="text-muted">

                    Publisehd at: {e.created_at} by {e.user}

                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
      }

export default ArticleByCategory;
