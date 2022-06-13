import React from "react";
import UpdatedComponent from "./count";
class HoverCounter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevstate=>{
            return{count:prevstate.count+1}
        })
    }
    render(){
        const{count}=this.state
        return<div>
            <button onMouseOver={this.incrementCount}>{this.props.name} clicked {count}times</button>
        </div>
    }
}
export default UpdatedComponent  (HoverCounter);