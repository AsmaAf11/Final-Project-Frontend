import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  useEffect (()=>{
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
},[])
//http://localhost/:8000/login/
const postData =()=>{
  axios.post ('http://127.0.0.1:8000/login/',{
      username,
      password,
    
  }).then(res=>{
    console.log(res.data);


      navigate("/");
      })

      // .catch(err=>{console.log(err)})

}
  return (
    <>
    <div className='con'>
      <input placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}></input>
      <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button onClick={postData}>Login</button> </div>
    </>
  )
}

export default Login;