import React,{useEffect, useRef} from "react";
function FocusInput(){
    const inputref=useRef("")
    useEffect(()=>{
      inputref.current.focus();
    },[])
   const submitHandler=()=>{
       alert(inputref.current.value)
       console.log("console>>..",inputref.current.value)
   }
    return<div>
        <form onSubmit={submitHandler}>
       <input type="text" ref={inputref}/>
       <input type="submit"/>
       </form>
    </div>
}
export default FocusInput;