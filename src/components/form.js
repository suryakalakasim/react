import React from "react";

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            comments:"",
            topics:""
        }
    }
    handelUsername =(event)=>{
        this.setState({
             username:event.target.value
        })
    }
    handelComments =(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handelTopics=(event)=>{
       this.setState({
           topics:event.target.value
       })
    }
    handelSubmit=(event)=>{

        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>username:</label>
                    <input type="name" value={this.state.value} onChange={this.handelUsername}/>
                    <div>
                    <label>comments</label>
                    <textarea type="text" value={this.state.value} onChange={this.handelComments}/>
                    </div>
                    <div>
                        <label>topics</label>
                        <select value={this.state.valeu} onChange={this.handelTopics}>
                            <option value="react">react</option>
                            <option value="angular">anguler</option>
                            <option value="vue">vue</option>
                        </select>
                    </div>
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}
export default Form;