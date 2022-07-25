import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './reg.css';


function Signup() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const navigate = useNavigate()

    useEffect (()=>{
      setUsername(localStorage.getItem("username"));
      setPassword(localStorage.getItem("password"));
      setEmail(localStorage.getItem("email"));

  },[])
    const postData =()=>{
        axios.post (`http://127.0.0.1:8000/register/`,{
            username,
            password,
            email
        }).then(res=>{console.log(res);
            navigate("/Login");
            })
            .catch(err=>{console.log(err)})

    }
  return (
    // <div>
    //   <input placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}></input>
    //   <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
    //   <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
    //   <button onClick={postData}>Signup</button>
    // </div>
    <>
    
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" >
            <h1 className="my-5 display-5 fw-bold ls-tight">
              The best offer <br />
              <span >for your business</span>
            </h1>
            <p className="mb-4 opacity-70" >
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
                <form>
                 
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control"  onChange={(e)=>{setUsername(e.target.value)}} />
                        <label className="form-label" >Username</label>
                      </div>
                    </div>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} />
                    <label className="form-label" >Email address</label>
                  </div>
                 
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <label className="form-label" >Password</label>
                  </div>
                 
                  <button type="submit" className="btn btn-primary btn-block mb-4" onClick={postData}>
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        </>
  )
}

export default Signup