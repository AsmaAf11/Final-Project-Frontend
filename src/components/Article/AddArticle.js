import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Article/css/Article.css";
import { useParams } from "react-router-dom";

export default function AddArticle() {
  document.title = "Add Article";
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [reference, setReference] = useState();
  const [category, setCategory] = useState();
  const [summary, setSummary] = useState();
  const [content, setContent] = useState();

  const accessToken = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const addArticle = () => {
    axios
      .post(
        `http://127.0.0.1:8000/add_article/`,
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
      <section className="add_article ">
        <h1 className="title"> Add Article</h1>
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
              ></input>
              <label htmlFor="reference" className="label">
                reference
              </label>
            </div>

            <div className="form-field col-lg-6">
              <select
                className="input-text"
                id="category"
                defaultValue="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option disabled value="Category">
                  Select
                </option>
                <option value="7">Food Drink</option>
                <option value="6">Entertainment</option>
                <option value="5">Sport</option>
                <option value="4">Economy</option>
                <option value="3">Health</option>
                <option value="2">Business</option>
                <option value="1">Technology</option>
              </select>
              <label htmlFor="category" className="label">
                category
              </label>
            </div>

            {/* <div className="form-field col-lg-6">
              <input
                id="category"
                className="input-text"
                type={"text"}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              ></input> */}
            {/* <label htmlFor="category" className="label">
                category
              </label> */}
            {/* </div> */}

            <div className="form-field col-lg-12">
              <textarea
                id="summary"
                className="input-text"
                type={"text"}
                onChange={(e) => {
                  setSummary(e.target.value);
                }}
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
              />
              <label htmlFor="content" className="label">
                content
              </label>
            </div>
            <div className="form-field col-lg-12 text-center">
              <input
                className="submit-btn"
                type={"submit"}
                value="Add"
                onClick={addArticle}
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
