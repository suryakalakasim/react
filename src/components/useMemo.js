import React,{useState} from "react";
function Counter(){
const[counterOne,setCounterOne]=useState(0)
const[counterTwo,setConterTwo]=useState(0)
const incrementOne=()=>{
  setCounterOne(counterOne+1)  
}
const incrementTwo=()=>{
    setConterTwo(counterTwo+1)  
  }
return<div>
     
     <button onClick={incrementOne}>count-1-{counterOne}</button>
     <button onClick={incrementTwo}>count-1-{counterTwo}</button>
</div>
}
export default Counter;