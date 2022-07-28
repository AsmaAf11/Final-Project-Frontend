import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bookmarkicon from "./bookmarkicon.png"
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
        .post(`http://127.0.0.1:8000/add_bookmark/${id}/`,{}, config)
        .then((res) => {
          console.log(res.data);
          // alert('added successfuly')
          // window.location.reload();
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
   
              <img
                style={{ width: "100%", height: "450px" }}
                variant="top"
                src={e.image}
                alt=' '
              />
              
             
                <h2 className="cardTitleText1 pt-3"> {e.title} </h2>

                
                <div className=" article-content">
                <div onClick={()=>{
                      addBookmark();
                    }} ><img className="bookmark-img" src={bookmarkicon}/></div>
                
                <p className="cardParagraphText">
                  <br /> {e.content}
                </p>
                <p className="cardParagraphText">
                  <b>Summary:</b>
                  <br /> {e.summary}
                </p>
                <p className="cardParagraphText">
                <b>Reference:</b>
                  <br /> {e.reference}
                </p>
                <p className="text-muted">
                  Publisehd at: {e.created_at} by {e.username}
                </p>
                </div>
            
          </Container>
        );
      })}

      <Container className="commentbody1">
            <Card className="commentbody">
              <Card.Body> 
                <Card.Title
                
                  style={{ textAlign: "left" }}
                >
                  Add Comment
                </Card.Title>

                <Card.Text className="cardParagraphText">
                  <br />  <div className="form-field col-lg-6">
              <textarea
                id="content"
                placeholder="comment here"
                className="commentinput"
                type={'text'}

                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
                </Card.Text>
		        <div className="form-field ">
              <input
              // style={{padding:'1px',paddingLeft:'10px',paddingRight:'10px',fontSize:'15px'}}
              style={{ marginRight: "10px", width: "50px" ,fontWeight: "bold" }}
              className="btn btn-outline-primary custom-btn"
              type={"submit"}
                value="Add Comment"
                onClick={addComment}
              ></input></div>
              </Card.Body>
            </Card>
          </Container>
   

      {/* view comments delete in the same card*/}
      {comments.map((ec) => {
        return (
          <Container className="pt-5">
            <Card>
              <Card.Body>  
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


    </div>
  );
}
