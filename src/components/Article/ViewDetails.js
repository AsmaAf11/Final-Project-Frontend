import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ViewDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState();
  const [deleteCommentId, setDeleteCommentId] = useState([]);
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  const [bookMark, setBookMark] = useState();
  const navigate = useNavigate();

  // view article details
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

  // view comments
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

  // add comment
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

  // delete comment
  const deleteComment = () => {
    axios
      .delete(
        `http://127.0.0.1:8000/delete_comment/${deleteCommentId}/`,
        config
      )
      .then((res) => {
        setData(res.data.Comment);
        alert("deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    
    
    const addBookmark = () => {
      axios
        .post(`http://127.0.0.1:8000/add_bookmark/${id}/`, {}, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    // view article details card
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
                <Card.Title className="cardTitleText">Title: {e.title} </Card.Title>

                <Button onClick={()=>{
                      addBookmark();
                    }} >Add To BookMark</Button>
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
                  Publisehd at: {e.created_at} by {e.username}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}

      {/* view comments delete in the same card*/}
      {comments.map((ec) => {
        return (
          <Container className="pt-5">
            <Card>
              <Card.Body>
                <Card.Title className="cardTitleText">Username: {ec.username}</Card.Title>
                <Card.Text className="cardParagraphText">Comment:<br /> {ec.content}</Card.Text>
  
                <Card.Text>
                  <span
                    className="bi bi-x-square"
                    style={{
                      padding: `10px`,
                      color: "red",
                      marginBottom: "20px",
                    }}
                    onClick={() => {
                      setDeleteCommentId(ec.id);
                      deleteComment();
                    }}
                  ></span>
                </Card.Text>
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
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        );
      })}

      {/* add comment */}
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
