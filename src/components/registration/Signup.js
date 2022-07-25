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
            navigate("/login");
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

<section class="background-radial-gradient overflow-hidden">
  

  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
        <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
          The best offer <br />
          <span style="color: hsl(218, 81%, 75%)">for your business</span>
        </h1>
        <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" onChange={(e)=>{setUsername(e.target.value)}} />
                    <label class="form-label" for="form3Example2">Username</label>
                  </div>
                </div>
              </div>

              
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control"  onChange={(e)=>{setEmail(e.target.value)}}/>
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4" onClick={postData}>
                Sign up
              </button>
            
          </div>
        </div>
      </div>
    </div>
 
</section>

        </>
  )
}

export default Signup