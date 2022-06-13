import React from "react";
import UpdetedComponent from "./count";
class ClickCounter extends React.Component{
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
    return <div>
        <button onClick={this.incrementCount}>{this.props.name} clicked {count} times</button>
    </div>
}

}
export default UpdetedComponent (ClickCounter);