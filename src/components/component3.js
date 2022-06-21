import React from "react";
import {UserConsumer} from '../components/userContext';
class Component3 extends React.Component{
    render(){
    return<div>
Component3

<UserConsumer>
    {
        (array)=>{
            console.log("array>>>",array)
            return<div>
                <li>{array[0]}</li>
                <li>{array[1]}</li>
                <li>{array[2]}</li>
                <li>{array[3]}</li>
               {/* Hello {stdDetails.name} your marks are {stdDetails.marks}*/}
                </div>
        }
    }
</UserConsumer>

    </div>
}
}
export default Component3;