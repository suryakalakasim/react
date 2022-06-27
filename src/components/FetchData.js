import React, { useEffect, useState } from "react";

function FetchData(){
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(response=>
        response.json()).then(json=>setData(json))
    
     },[])
    return<div>
         {data.map(item => <li key={item.id}> {item.title} </li>)}
        fetch the data
    </div>
}
export default FetchData;