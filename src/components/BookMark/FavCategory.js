import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import removefav from './removefav.png'


function FavCategory() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [deleteFavCategory, setDeleteFavCategory] = useState([]);

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
      .get(`http://127.0.0.1:8000/list_favCategory/`, config)
      .then((res) => {
        console.log(res.data.Favouites);
        setData(res.data.Favouites);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   
    <div style={{width:'80%',height:'100%',textAlign:'center',position:'relative',margin:'0 auto'}}>
    {data.map((e) => {
      return (
        <div className="col-8 col-md-6">
          
            <Card style={{ width: "28rem" ,  marginBottom:'20px'}} className="border-dark shadow">
            <div className="categoryimg clickonimg"
            onClick={() => {
              navigate(`/articlesCategories/${e.id}`);
            }}
          >
              <Card.Img
                style={{ width: "100%", height: "200px" }}
                variant="top"
                src={e.category.image}
              />
              </div>
              <Card.Body
             style={{ width: "100%", height: "1px" }}>
                <Card.Title  className="cardTitle" >{e.category.name}</Card.Title>
              </Card.Body>
              
              <div className="d-flex p-2"   
          onClick={()=>{
                 setDeleteFavCategory(e.id);
                 deleteFav();
                alert('added')}
                       } ><img  className="clickonimg" style={{  height: "40px" ,backgroundColor:"white"}} src={removefav}/></div>

             
            </Card>
        </div>
      );
    })}
  </div>

export default FavCategory;

