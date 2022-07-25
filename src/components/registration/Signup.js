import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


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
    <div>
      <input placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}></input>
      <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button onClick={postData}>Signup</button>

    </div>
  )
}

export default Signup