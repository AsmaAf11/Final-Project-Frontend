import { Card, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import like from '../Home/like.png'

function ArticleByCategory() {
  const { id } = useParams();
  const [data, setData] = useState([]);
<<<<<<< HEAD
=======
  const navigate = useNavigate();
  
 
  // const[id, setId] = useState();
>>>>>>> e08cf357046ea63f964a6d76c40a635a340c89bf

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

  // const SearchHandle = async (event) => {
  //   let key = event.target.value;
  //   let result = await fetch(`http://127.0.0.1:8000/search1/${key}`);
  //   result = await result.json();
  //   if (result) {
  //     setData(result);
  //   }
  // };
  const Search = async (event) => {
    let key = event.target.value;
    axios
      .get(`http://127.0.0.1:8000/search1/?title=${key}`)
      .then((response) => {
        console.log(response.data.Article);
         setData(response.data.Article);

<<<<<<< HEAD
      })
      .catch((error) => {
        console.log(error.response);
      });

  };
  return (
    <>
      <input
        type=""
        className="search-box"
        placeholder="Search"
        onChange={Search}
      />
      <div className="cardsRow">
        {data?.map((e) => {
          return (
            <Container className="pt-5">
              <Card style={{ width: "30rem" }} key={e.id}>
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

                  {/* <div className="likeborder">
                <Card.Text  ><img className="cardlikeimg" src={like}/> {e.likes}</Card.Text>
                </div> */}
                  <Card.Footer className="text-muted">
                    Publisehd at: {e.created_at} by {e.publisher}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </div>
    </>
=======



  let [counter, setCounter] = useState(0);
  const [likes,SetLike]=useState(0)

  const addlike =()=>{
    setCounter(counter++);

    axios.post ("http://127.0.0.1:8000/add_ArticleLike",{
        likes
    }).then(res=>{
      
      console.log(res.data);
      SetLike(res.data.Articles);

        })
        .catch(err=>{console.log(err)})
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
                
                <span className="d-flex">
                <div className="likeborder">
                <Card.Text> <div className="clickonimg" onClick={addlike}><img className="cardlikeimg" src={like}/></div> {e.likes}</Card.Text>
                </div>
                </span>
                <br/>
                <Button
                  onClick={() => {
                    navigate(`/ViewDetails/${e.id}`);
                  }}
                >
                  View Articles
                </Button>
                <Card.Footer className="text-muted">
                  Publisehd at: {e.created_at} by {e.publisher}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div></>
>>>>>>> e08cf357046ea63f964a6d76c40a635a340c89bf
  );
}
export default ArticleByCategory;
