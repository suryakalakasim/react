import React from "react";
import axios from "axios";
class PostList extends React.Component{
    constructor(){
        super()
        this.state ={
            post:[]
        }
    }
   componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response)
          // this.setState({post: response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {post} = this.state
        return<div>
         postlist
         {post.length?post.map(post=><li className="postlist" key={post.id}>{post.title}</li>):<h3 className="empty"> post list is empty</h3>}
     
     
         </div>
    }
}
export default PostList;