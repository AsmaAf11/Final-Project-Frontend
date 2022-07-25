import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Top5() {
    const [article ,setArticle] = useState([]);
    
useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/top5/") 
    .then(res => {  
        console.log(res.data.TOP_5)
        console.log(res.data.TOP_5[0].title)
        setArticle(res.data.TOP_5)
})
.catch((err) => { 
    console.log(err);
});    
},[]);

  return (
    <>
    <div className='containerh1'><h1 className='hh'>TOP 5</h1></div>
       <div className="container1">
        {article.map((e) => (
        <div className="row row-cols-4 row-cols-md-4 g-4">
        <div className="card">
          <img src={e.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">{e.title}</h3>
            </div></div></div>
            ))}
        </div>
   </>
  )
  }
export default Top5