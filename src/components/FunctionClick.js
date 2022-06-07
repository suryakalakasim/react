import React from "react";

function FunctionClick(){
    function Eventhandlers(){
        alert("hello kala")
    }
    return<div>
        <h1>event handlers in functionalcomponent</h1>
<button type="button" onClick={Eventhandlers}>click</button>
    </div>
}
export default FunctionClick;