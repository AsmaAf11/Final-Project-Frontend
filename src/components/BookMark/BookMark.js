import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PArticles from "../Article/PArticles";
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
      headers: { Authorization: `Bearer ${accessToken}` },
    };
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

  const deleteBookMark = () => {
    axios
      .delete(
        `http://127.0.0.1:8000/delete_bookmark/${deleteBookMarkId}/`,
        config
      )
      .then((res) => {
        console.log("inside http delete method");
        setData(res.data.Bookmark);
      })
      .catch((error) => {
        console.log("inside http delete method / catch part");
        console.log(error);
      });
  };

  return (
    <>
    <div>
      <div>
        <FavCategory />
      </div>

      {data.map((e) => {
        return (
          <div className="col-8 col-md-6" style={{marginTop:'30px'}}>
              <Card 
                style={{ width: "28rem", marginBottom: "20px" }}
                className="cardBorder" 
              >
              <Card.Img
                className="ArticleImg"
                style={{ width: "100%", height: "250px" }}
                variant="top"
                src={e.article.image}
              />
              <Card.Body>
                <Card.Title className="cardTitleText1">
                  {e.article.title}
                </Card.Title>
                {/* <Button className="btn btn-danger"
                    onClick={()=>{
                      setDeleteBookMarkId(e.id);
                      deleteBookMark();
                    }}
                    style={{ marginBottom:'20px'}}
                  >
                    UnBookMark
                  </Button> */}
                <div className="clickonimg">
                  <div style={{ textAlign: "center" }}>
                    <Button
                      variant="outline-dark"
                      style={{ marginBottom: "10px" }}
                      onClick={() => {
                        navigate(`/ViewDetails/${e.article.id}`);
                      }}
                    >
                      View Articles
                    </Button>{" "}
                  </div>

                  <svg
                    onClick={() => {
                      setDeleteBookMarkId(e.id);
                      deleteBookMark();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width=""
                    height="20"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </div>
              </Card.Body>
            </Card>
        </div>
      );
    })}
  </div>
</>
  );
}

export default BookMark;
