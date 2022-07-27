import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PArticles from '../Article/PArticles'
import { Card, Container, Button } from "react-bootstrap";
import FavCategory from "./FavCategory";

function BookMark() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [deleteBookMarkId, setDeleteBookMarkId] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }}
    axios
      .get(`http://127.0.0.1:8000/all_bookmark/`, config)
      .then((res) => {
        console.log(res.data.Bookmark);
        setData(res.data.Bookmark);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const deleteBookMark= () => {
    axios
      .delete(`http://127.0.0.1:8000/delete_bookmark/${deleteBookMarkId}/`, config)
      .then((res) => {
        console.log('inside http delete method');
        setData(res.data.Bookmark);
      })
      .catch((error) => {
        console.log('inside http delete method / catch part');
        console.log(error);
      });
  };


  return (
      <div>

        <div> <FavCategory/></div>
         
        
    {data.map((e) => {
        return (
          <Container className="pt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "350px" }}
                variant="top"
                 src={e.article.image}
              />
              <Card.Body>
                <Card.Title>{e.article.title}</Card.Title>
                <Button  style={{ marginBottom:'10px'}}
                  onClick={() => {
                    navigate(`/ViewDetails/${e.article.id}`);
                  }}
                >
                  View Articles
                </Button>
                
                <Button className="btn btn-danger"
                    onClick={()=>{
                      setDeleteBookMarkId(e.id);
                      deleteBookMark();
                    }}
                    style={{ marginBottom:'20px'}}
                  >
                    UnBookMark
                  </Button>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  )
}

export default BookMark
