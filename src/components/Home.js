import React,{useState,useEffect} from "react";
import{Link} from 'react-router-dom'
import axios from "axios";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Row, Col} from 'react-bootstrap'  
function Home(){
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
          setData(response.data)
          console.log(response)
      })
      .catch(error=>{
        console.log(error)
        setData("")
     })
      
    },[])
    return(<div>
        <h1 style={{color:"red"}}>This is an Homepage</h1>
    
        <Link className="link" to='/image'>image</Link>
        <Link className="link" to='/about'>about</Link>
        <div>
            <Row xs={1} md={3}>
 {data?data.map(itam=>
 <div key={itam.id}>
  
      
     <Col >
     <Card  style={{width:"18rem"}} className="card"  >
     id:{itam.userId}<br/>title:{itam.title}<br/>body:{itam.body}</Card>
    </Col>
    
    </div>
    ):<div>data not found</div>}
    </Row>
</div>
    </div>)
}
export default React.memo(Home);