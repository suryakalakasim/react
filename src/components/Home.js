import React,{useState,useEffect} from "react";
import{Link} from 'react-router-dom'
import axios from "axios";
import {Card} from 'reactstrap';
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
    
        {/* <Link className="link" to='/image'>image</Link> */}
        {/* <Link className="link" to='/about'>about</Link> */}
        {/* {data.map(itam=><li key={itam.id}>{itam.title}</li>)} */}
        <div>
 {data?data.map(itam=><Card style={{width:"100px"}} className="card" key={itam.id} >
     id:{itam.userId}<br/>title:{itam.title}<br/>body:{itam.body}</Card>):<div>data not found</div>}
</div>
    </div>)
}
export default React.memo(Home);