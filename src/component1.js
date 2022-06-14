import React,{useContext} from "react";
import {context} from "./App";
import Component2 from "./component2";
function Component1(){
    const data =useContext(context)
    console.log("component1>>",data)
    return<div>
        <h2>component1</h2>
<Component2/>
    </div>
}
export default Component1;