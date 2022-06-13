import React from "react";

class Lifecyclemethod1 extends React.Component{
constructor(props){
    super(props)
    console.log("constractormethod1 called")
    
}
componentDidMount(){
    console.log("component Didmount1")
}
componentDidUpdate(){
    console.log("componentDidupdate1")
}
render(){
console.log("render method called1")
return<div>
    <h1>Lifecyclemethod1</h1>
</div>


}


}
export default Lifecyclemethod1;