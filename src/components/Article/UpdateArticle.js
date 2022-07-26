import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function UpdateArticle() {
  document.title = "Update Article";
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [reference, setReference] = useState();
  const [category, setCategory] = useState();
  const [summary, setSummary] = useState();
  const [content, setContent] = useState();

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

  const accessToken = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const updateArticle = () => {
    axios
      .put(
        `http://127.0.0.1:8000/update_article/${id}/`,
        {
          title,
          image,
          reference,
          category,
          summary,
          content,
        },
        config
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {data.map((e) => {
        return (
          <section className="add_article ">
            <h1 className="title"> Update Article</h1>
            <div className="container">
              <div className="add-form row">
                <div className="form-field col-lg-6">
                  <input
                    id="title"
                    className="input-text"
                    type={"text"}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    defaultValue={e.title}
                    
                  ></input>
                  <label htmlFor="title" className="label">
                    Title
                  </label>
                </div>
                <div className="form-field col-lg-6">
                  <input
                    id="image"
                    className="input-text"
                    type={"url"}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    defaultValue={e.image}
                  ></input>
                  <label htmlFor="image" className="label">
                    Image
                  </label>
                </div>
                <div className="form-field col-lg-6">
                  <input
                    id="reference"
                    className="input-text"
                    type={"url"}
                    onChange={(e) => {
                      setReference(e.target.value);
                    }}
                    defaultValue={e.reference}
                  ></input>
                  <label htmlFor="reference" className="label">
                    reference
                  </label>
                </div>
                <div className="form-field col-lg-6">
                  <input
                    id="category"
                    className="input-text"
                    type={"text"}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    defaultValue={e.category}
                  ></input>
                  <label htmlFor="category" className="label">
                    category
                  </label>
                </div>
                <div className="form-field col-lg-12">
                  <textarea
                    id="summary"
                    className="input-text"
                    type={"text"}
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                    defaultValue={e.summary}
                  />
                  <label htmlFor="summary" className="label textarea">
                    summary
                  </label>
                </div>
                <div className="form-field col-lg-12">
                  <textarea
                    id="content"
                    className="input-text"
                    type={"text"}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    defaultValue={e.content}
                    
                  />
                  <label htmlFor="content" className="label">
                    content
                  </label>
                </div>
                <div className="form-field col-lg-12 text-center">
                  <input
                    className="submit-btn"
                    type={"submit"}
                    value="Update"
                    onClick={updateArticle}
                  ></input>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      
    </>
  );
}
