import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PArticles from "../Article/PArticles";
import { Card, Container, Button } from "react-bootstrap";

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

  const deleteFav = () => {
    axios
      .delete(
        `http://127.0.0.1:8000/delete_favCategory/${deleteFavCategory}/`,
        config
      )
      .then((res) => {
        setData(res.data.Favouites);
        alert("deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h4 style={{ margin: "100px 0 20px 80px",color: "#545454" }}>I'm Interested in ..</h4>
      <div
        className="row"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          position: "relative",
          margin: "0 auto",
        }}
      >
        {data.map((e) => {
          return (
            <div className="col-6 col-md-4" style={{marginLeft:'70px'}}
            >
              {/* <Card style={{width:'100%',height:'100px',display:'inline-block',lineHeight:'100px',backgroundColor:'white',marginBottom:'30px'}}className="border-dark"> */}
              <Card
                style={{ marginBottom: "20px" , justifyContent:'space-around'}}
                className="border-dark"
              >
                <div
                  onClick={() => {
                    navigate(`/articlesCategories/${e.category.id}`);
                  }}
                >
                  <Card.Img
                    style={{ width: "100%", height: "200px" }}
                    variant="top"
                    src={e.category.image}
                  />
                </div>
                <Card.Body style={{ width: "100%", height: "100px" }}>
                  <Card.Title>
                    <h5 style={{textTransform:'capitalize'}}>{e.category.name}</h5>
                  </Card.Title>
                  <Card.Text>
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        setDeleteFavCategory(e.id);
                        deleteFav();
                      }}
                    >
                      Unfavourite
                    </Button>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FavCategory;

{
  /* <div>
{data.map((e) => {
  return (
    <Container className="pt-5">
      <Card style={{ width: "30rem" }} className="border-dark">
        <div
          onClick={() => {
            navigate(`/articlesCategories/${e.category.id}`);
          }}
        >
          {" "}
          <Card.Img
            style={{ width: "100%", height: "350px" }}
            variant="top"
            src={e.category.image}
          />
        </div>
        <Card.Body>
          <Card.Title className="cardTitleText">
            {e.category.name}
          </Card.Title>
        </Card.Body>
        <Button
          className="btn btn-danger"
          onClick={() => {
            setDeleteFavCategory(e.id);
            deleteFav();
          }}
          style={{ marginBottom: "20px" }}
        >
          Unfavourite
        </Button>
      </Card>
    </Container>
  );
})}
</div> */
}
