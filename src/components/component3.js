import React,{useContext} from "react";
import {userConsumer} from  './components/userContext';
function Component3(username){
    return<div>
Component3

<userConsumer>
    {
        (username)=>{
            return<div>Hello{username}</div>
        }
    }
</userConsumer>

    </div>
}
export default Component3;