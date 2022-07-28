import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";

function PArticles() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    axios
      .get(`http://127.0.0.1:8000/posted_articles_per_publisher/`, config)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/posted_articles_per_publisher/`)
  //     .then((res) => {
  //       console.log(res.data.Articles);
  //       // setData(res.data.Articles);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <div
        class="btn-group mr-2"
        role="group"
        aria-label="First group"
        style={{ marginRight: "15px" }}
      >
        <h4 style={{ margin: "100px 0 20px 70px", color: "#545454" }}>
          My Added Articles ..
        </h4>
      </div>
      <div
        class="btn-group mr-2"
        role="group"
        aria-label="First group"
        style={{ marginRight: "15px" }}
      >
        {/* <button
          type="button"
          class="btn btn-outline-dark"
          data-mdb-ripple-color="dark"
          style={{
            margin: "100px 0 20px 500px",
            float: "right",
          }}
        >
          Add new Article
        </button> */}
        <button
          type="button"
          class="btn btn-outline-primary"
          data-mdb-ripple-color="dark"
          style={{
            margin: "100px 0 20px 500px",
            float: "right",
          }}
          onClick={() => {
            navigate('/AddArticle');
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
            style={{ marginRight: "10px" }}
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
          </svg>
          Article
        </button>
      </div>

      {data.map((e) => {
        return (
          <>
            <div style={{ marginTop: "12px" }}></div>
            <div
              className="d-flex justify-content-between"
              style={{ marginLeft: "70px" }}
            >
              <div class="card mb-3" style={{ width: "890px" }}>
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src={e.image} class="card-img" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{e.title}</h5>
                      <p class="card-body">
                        <div
                          class="btn-group mr-2"
                          role="group"
                          aria-label="First group"
                          style={{ marginRight: "15px" }}
                        >
                          <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-mdb-ripple-color="dark"
                            onClick={() => {
                              navigate(`/ViewDetails/${e.id}`);
                            }}
                            style={{ marginLeft: 10, width: "110px" }}
                          >
                            View
                          </button>
                        </div>

                        <div
                          class="btn-group mr-2"
                          role="group"
                          aria-label="First group"
                          style={{ marginRight: "15px" }}
                        >
                          <button
                            type="button"
                            class="btn btn-outline-warning"
                            data-mdb-ripple-color="dark"
                            onClick={() => {
                              navigate(`/UpdateArticle/${e.id}`);
                            }}
                            style={{ marginLeft: 10, width: "110px" }}
                          >
                            Update
                          </button>
                        </div>
                        <div
                          class="btn-group mr-2"
                          role="group"
                          aria-label="First group"
                        >
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            data-mdb-ripple-color="dark"
                            onClick={() => {
                              navigate(`/DeleteArticle/${e.id}`);
                            }}
                            style={{ marginLeft: 10, width: "110px" }}
                          >
                            Delete
                          </button>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default PArticles;

//   return (
//     <>
//       <div
//         className="row "
//         style={{
//           width: "80%",
//           height: "100%",
//           textAlign: "center",
//           position: "relative",
//           margin: "0 auto",
//         }}
//       >
//         {data.map((e) => {
//           return (
//             <div className="col-8 col-md-6">
//               <Card
//                 style={{ width: "28rem", marginBottom: "20px" }}
//                 className="border-dark"
//               >
//                 <Card.Img
//                   style={{ width: "100%", height: "350px" }}
//                   variant="top"
//                   src={e.image}
//                 />
//                 <Card.Body>
//                   <Card.Title>{e.title}</Card.Title>
//                   <Button
//                     onClick={() => {
//                       navigate(`/ViewDetails/${e.id}`);
//                     }}
//                     style={{ marginLeft: 10, width: "110px" }}
//                   >
//                     View
//                   </Button>

//                   <Button
//                     onClick={() => {
//                       navigate(`/UpdateArticle/${e.id}`);
//                     }}
//                     style={{ marginLeft: 10, width: "110px" }}
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     onClick={() => {
//                       navigate(`/DeleteArticle/${e.id}`);
//                     }}
//                     style={{ marginLeft: 10, width: "110px" }}
//                   >
//                     Delete
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
