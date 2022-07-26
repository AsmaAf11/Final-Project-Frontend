import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./reg.css";

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

    <section className="background-radial-gradient overflow-hidden form-style">
      
    
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" >
            <h1 className="my-5 display-5 fw-bold ls-tight" >
              The best offer <br />
              <span >for your business</span>
            </h1>
            <p className="mb-4 opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>
    
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
    
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                  
                    <input type="text" className="form-control" onChange={(e)=>{setUsername(e.target.value)}} />
                    <label className="form-label">Username</label>
                  
                    <input type="password"  className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <label className="form-label">Password</label>
                 
                  </div>
 <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block mb-4 " onClick={login}>
                    Login
                  </button></div>
                  
              </div>
            </div>
          </div>
        </div>
     
    </section>
    </>
  );
}

export default Login;
