import React from "react";
import Component3 from "../components/component3";
import {UserConsumer} from '../components/userContext';
class Component2 extends React.Component{
    render(){
    return<div>
       <UserConsumer>
    {
        (stdDetails)=>{
            console.log("stdDetails>>>",stdDetails)
            return<div>
    
                Hello  your marks are 
                </div>
        }
    }
</UserConsumer>
<Component3/>
    </div>
}
}
export default Component2;