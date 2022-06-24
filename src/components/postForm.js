import React from "react";
import axios from "axios";
class PostForm extends React.Component{
    constructor(){
        super()
        this.state={
              userid:"",
              title:"",
              body:""
        }
    }
    eventHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const{userid,title,body} = this.state
        return<div>
            <form onSubmit={this.submitHandler}>
                <input type="text" name="userid" value={userid} onChange={this.eventHandler}/>
                <div>
                    <input type="text" name="title" value={title} onChange={this.eventHandler}/>
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.eventHandler}/>
                </div>
                <button type="submit">submit</button>
            </form>
            
        </div>
    }
} 
export default PostForm;