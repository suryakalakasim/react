import React, { useEffect, useState } from "react";
import axios from "axios";
const baseURL="https://jsonplaceholder.typicode.com/posts";
 function DeletePost(){
     const[post,setPost]=useState(null);
     useEffect(()=>{
       axios.get(`${baseURL/1}`).then(response=>
        {setPost(response.data);}
       )
     },[]);
     function updatePost(){
         axios.put(`${baseURL}`/1,{
             title:"Hello World!",
             body:"this is an updatepost."
         }).then(response=>{
             setPost(response.data);
         })
     }
     if(!post)return "no post!"
     return<div>
DeletePost
<h1>{post.title}</h1>
<p>{post.body}</p>
<button onClick={updatePost}>updatepost</button>
     </div>
 }
 export default DeletePost;