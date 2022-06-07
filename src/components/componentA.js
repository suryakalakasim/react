
import React from "react";
import ComponentB from "./componentB";

class ComponentA extends React.Component{
    constructor(props){
super(props)
this.state ={
  count : 5
}
    }
  changeCount=()=>{
this.setState({count:this.state.count + 10})

}
 render(){
    return <div>  
      
      {console.log("sss>>",this.state)}
        <h1 className="value">the value is {this.state.count} </h1>
        <ComponentB state={this.state.count } stateSate={this.changeCount} />
  </div>
    }
}
export default ComponentA;
