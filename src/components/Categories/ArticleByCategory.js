import {Card, Container, Button} from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function ArticleByCategory() {
    const [data,setData]= useState([]);
    const[id, setId] = useState(null);
    const navigate = useNavigate();

    useEffect (()=>{
        setId(localStorage.getItem("id"));
        axios.get(`http://127.0.0.1:8000/posted_articles_per_category/${id}/`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data.Article);
        })
        .catch((err)=>{
            console.log(err);
        })
  

    },[])

    
 

  return (
    <div>
      
      {data.map((e) =>{
            return <Container className='pt-5'>
               
               <Card style={{ width: '18rem' }} >
        <Card.Img style={{ width: '100%',height:'350px' }}  variant="top" src={e.image} />
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
        </Card.Body>
        
      </Card>
     

            </Container>

        })}
        
       
    </div>
  )
}
export default ArticleByCategory