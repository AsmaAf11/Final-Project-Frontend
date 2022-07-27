import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, Button, Row } from "react-bootstrap";
import bookmark from './bookmark.png'
function Cards() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [idCategory, setIdCategory] = useState([]);
  const accessToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/all_categories/`)
      .then((res) => {
        console.log(res.data.Categories);
        setData(res.data.Categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const addFavCategory = () => {
    axios
      .post(`http://127.0.0.1:8000/add_favCategory/${idCategory}/`, {}, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (


<>




    <div className="row " style={{width:'80%',height:'100%',textAlign:'center',position:'relative',margin:'0 auto'}}>
      {data.map((e) => {
        return (
          <div className="col-8 col-md-6">
            
            {/* <Card style={{width:'100%',height:'100px',display:'inline-block',lineHeight:'100px',backgroundColor:'white',marginBottom:'30px'}}className="border-dark"> */}
              <Card style={{ width: "28rem" ,  marginBottom:'20px'}} className="border-dark">
              <div
              onClick={() => {
                navigate(`/articlesCategories/${e.id}`);
              }}
            >
                <Card.Img
                  style={{ width: "100%", height: "200px" }}
                  variant="top"
                  src={e.image}
                />
                </div>
                <Card.Body
               style={{ width: "100%", height: "1px" }}>
                  <Card.Title  className="cardTitle" >{e.name}</Card.Title>
                </Card.Body>
                
                <div className="d-flex" onClick={()=>{
                  setIdCategory(e.id);
                  addFavCategory();
                }} ><img  className="clickonimg" style={{  height: "40px" ,backgroundColor:"white"}} src={bookmark}/></div>

               
              </Card>
          </div>
        );
      })}
    </div>
      </>
  );
}

export default Cards;

