import React, { useEffect, useState } from "react";
import axios from "axios";
function GetData(){
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
          setData(response.data)
          console.log(response)
      })
      .catch(error=>{
         console.log(error)
      })
    },[])
    return<div>
<h3>Get the data</h3>
     {data.map(itam=><li key={itam.id}>{itam.title}</li>)}
    </div>
}
export default GetData;