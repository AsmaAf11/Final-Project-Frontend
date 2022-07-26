import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function ViewDetails() {
    const { id } = useParams();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios
        .get(`http://127.0.0.1:8000/article_details/${id}/`)
        .then((res) => {
          console.log(res.data);
          setData(res.data.Article);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


  return (
    <div className="cardsRow" style={{columnCount:1}}>
      {data.map((e) => {
        return (
          <Container className="pt-5">
            <Card style={{ width: "30rem" }}>
              <Card.Img
                style={{ width: "100%", height: "350px" }}
                variant="top"
                src={e.image}
              />
              <Card.Body>
                <Card.Title className="cardTitleText">Title: {e.title}</Card.Title>
                <Card.Text className="cardParagraphText">Content:<br /> {e.content}</Card.Text>
                <Card.Text className="cardParagraphText">Summary:<br />  {e.summary}</Card.Text>
                <Card.Text>Likes: {e.likes}</Card.Text>
                <Card.Footer className="text-muted">
                  Publisehd at: {e.created_at} by {e.publisher}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  );
}
