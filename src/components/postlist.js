import React from "react";
import axios from "axios";
class PostList extends React.Component{
    constructor(){
        super()
        this.state ={
            post:[]
        }
    }
   /* componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .than(response=>{
            console.log(response)
            this.setState({post: response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }*/
    render(){
        const {post} = this.state
        return<div>
         postlist
         {post.length?post.map(post=><div ky={post.id}>{post.title}</div>):null }
     
     
         </div>
    }
}
export default PostList;