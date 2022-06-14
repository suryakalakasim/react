import React from "react";
import Lifecyclemethod1 from "./lifecyclemethod";


class Lifecyclemethod extends React.Component{
constructor(props){
    super(props)
    console.log("constractormethod called")
    this.state={
        msg:"welcom to"
    }
}
componentDidMount(){

    console.log("componentDidmount")
}
componentDidUpdate(){
 
    console.log("componentDidupdate") 
    
    }
HandelSubmit=()=>{
    this.setState({
        msg:"I learing the"

    })
}


render(){
console.log("render method called")
return<div>
    <h1>{this.state.msg}Lifecyclemethod</h1>
    <button  type="button"onClick={this.HandelSubmit}>change state</button>
    <Lifecyclemethod1 />
</div>


}


}
export default Lifecyclemethod;