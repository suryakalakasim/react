import React,{useState,useEffect} from "react";
 

function Hooks(){
const [count,updatedC0unt]=useState(0)
const [name,setName]=useState("")
    useEffect(()=>{
        console.log("useeffect>>>")
        document.title=`you clicked ${count}`
    },[count])
    return<div>
        <h1>count:{count}</h1>
        <input type="name"onChange={(e)=>setName(e.target.name)}/>
<button onClick={()=>updatedC0unt(count+1)}>click me</button>
    </div>
}
export default Hooks;
