import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function ViewDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");


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
                {/* </Link */}
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  );
}
