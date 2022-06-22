import React, { useEffect, useState } from "react";
function HooksMouse(){
    const[x,setX]=useState("0")
    const[y,setY]=useState("0")
    const LogMousePosition=(e)=>{
      console.log('MouseMove')
      setX(e.clientX)
      setY(e.clientY)
    }
    useEffect(()=>{
      console.log("useEffect called")
      window.addEventListener('mousemove',LogMousePosition)
    },[])
    return<div>
       Hooks x-{x} y-{y}
    </div>
}
export default HooksMouse;