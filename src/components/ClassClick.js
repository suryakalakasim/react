import React from "react";



class ClassClick extends React.Component{
 ClickHandler=()=> {
       alert("classclick") 
    }
render(){
    return<div>
        <h1>eventhandler in class component</h1>
        <button type="button"onClick={this.ClickHandler}>click</button>
    </div>
    
}
}
export default ClassClick;