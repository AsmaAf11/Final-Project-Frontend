import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ViewDetails() {
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }

  var buttonText = show ? "Hide Component" : "Show Component";



  const { id } = useParams();
  const [data, setData] = useState([]);
  // get
  const [comments, setComments] = useState([]);
  // post
  const [content, setContent] = useState();

  const navigate = useNavigate();

  // const accessToken = localStorage.getItem("token");
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  // Add comment
  const addComment = () => {
    if (localStorage.getItem("token") === null) {
      alert("You Need To Login First");
    } else {
      axios
        .post(`http://127.0.0.1:8000/add_comment/${id}/`, { content }, config)
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //view article details
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

  // comments
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/view_comment/${id}/`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data.application);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const check_delete = () => {
    alert('delete')
    }
  
  return (
    <div className="cardsRow" style={{ columnCount: 1 }}>
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
                <Card.Title className="cardTitleText">
                  Title: {e.title}
                </Card.Title>
                <Card.Text className="cardParagraphText">
                  Content:
                  <br /> {e.content}
                </Card.Text>
                <Card.Text className="cardParagraphText">
                  Summary:
                  <br /> {e.summary}
                </Card.Text>
                <Card.Text>Likes: {e.likes}</Card.Text>
                <Card.Footer className="text-muted">
                  Publisehd at: {e.created_at} by {e.publisher}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
      {comments.map((ec) => {
        return (
          <Container className="pt-5">
            <Card>
              <Card.Body>
                <Card.Title
                  className="cardTitleText"
                  style={{ textAlign: "left" }}
                >
                  @{ec.username}
                </Card.Title>
                <Card.Text className="cardParagraphText">
                  <br /> {ec.content}
                </Card.Text>

                <Card.Footer className="text-muted">
                  Commented at: {ec.created_at}
                  <br></br>
                  
                  {/* <a onClick={check_delete}>delete</a> */}
                  {/* {show ? "Hide Component" : "Show Component"} */}
                  <p onClick={toggleShow}>{buttonText}</p>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}

      <section className="add_article ">
        <h1 className="title"> Add Comment</h1>
        <div className="container">
          <div className="add-form row">
            <div className="form-field col-lg-6">
              <input
                id="content"
                className="input-text"
                type={"text"}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></input>
              <label htmlFor="content" className="label">
                Comment:
              </label>
            </div>

            <div className="form-field col-lg-12 text-center">
              <input
                className="submit-btn"
                type={"submit"}
                value="add cpmment"
                onClick={addComment}
              ></input>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
