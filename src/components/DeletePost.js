import React, { useEffect, useState } from "react";
import axios from "axios";
const baseURL="https://jsonplaceholder.typicode.com/posts";
 function DeletePost(){
     const[post,setPost]=useState(true);
     useEffect(()=>{
       axios.get(`${baseURL/1}`).then(response=>
        {setPost(response.data);}
       )
     },[]);
     function deletePost(){
         axios.delete(`${baseURL}`/1).then(()=>{
             alert("post deleted!");
             setPost(true);
         })
         console.log("deletepost>>",deletePost)
     }
     if(!post)return "no post!"
     //{!post&&<div>no post</div>}
     return<div>
DeletePost
<h1>{post.title}</h1>
<p>{post.body}</p>
<button onClick={deletePost}>deletepost</button>
     </div>
 }
 export default DeletePost;