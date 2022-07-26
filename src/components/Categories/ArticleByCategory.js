import { Card, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticleByCategory() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  
 
  // const[id, setId] = useState();

  useEffect(() => {
    //  setId1(localStorage.getItem("id"));
    // console.log(localStorage.getItem("id"));
    axios
      .get(`http://127.0.0.1:8000/posted_articles_per_category/${id}/`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const SearchHandle = async (event)=>{
    let key = event.target.value;
    let result = await fetch(`http://127.0.0.1:8000/search1/${key}`);
    result = await result.json()
    if(result){
      setData(result)
    }
  }

  return (
    <>
    <input type="" className="search-box" placeholder="Search" onChange={SearchHandle}/>
    <div className="cardsRow">
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
                <Card.Title className="cardTitleText">{e.title}</Card.Title>
                <Card.Text className="cardParagraphText">{e.summary}</Card.Text>
                
                <div className="likeborder">
                <Card.Text  ><img className="cardlikeimg" src={like}/> {e.likes}</Card.Text>
                </div>
                <Card.Footer className="text-muted">
                  Publisehd at: {e.created_at} by {e.publisher}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div></>
  );
}
export default ArticleByCategory;
