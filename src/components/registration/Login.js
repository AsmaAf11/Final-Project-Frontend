import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./reg.css";
import logo from "../Home/knowledge_hub_logo.png";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, []);

  const login = () => {
    axios
      .post(`http://127.0.0.1:8000/login/`, { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("token", res.data.token);
        alert("Logged in Successfuly");
        navigate("/");
        //   if (res.status === 200) {
        //     localStorage.setItem("token", res.data.token);
        //     navigate("/");
        //     window.location.reload()
        //   }
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <span
                className="my-5 display-5 fw ls-tight"
                style={{ color: "#545454" }}
              >
                Welcome to <br />
              </span>
              <span style={{ fontSize: "60px", color: "#545454" }}>
                Knowledge Hub
              </span>{" "}
              <hr></hr>
              {/* <span><img src={logo} alt='logo'></img></span> <hr /> */}
              <p className="mb-4 opacity-70"></p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <h3 className="reg-title">Login</h3>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label className="form-label">Username</label>

                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label className="form-label">Password</label>
                  <br></br>
                  <div className="d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn btn-outline-primary custom-btn"
                      data-mdb-ripple-color="dark"
                      style={{
                        marginRight: "10px",
                        width: "100px",
                        fontWeight: "bold",
                      }}
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>
                  <div className="end-labels">
                    <p>
                      Don't have an account?
                      <a
                        href="/signup"
                        style={{
                          transition: "all 0.2s linear",
                          marginLeft: 10,
                        }}
                      >
                        Register
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  {/* <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 "
                    onClick={login}
                  >
                    Login
                  </button> */}
                  {/* <a
                    type="button"
                    className="btn btn-outline-dark"
                    data-mdb-ripple-color="dark"
                    style={{
                      marginRight: "10px",
                      width: "100px",
                      fontWeight: "bold",
                    }}
                    href="/login"
                  >
                    Login
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
