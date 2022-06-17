import React, { useState } from "react";
function Apilicationform (){
    const [name,setName]= useState("")
    const[mail,setMail]= useState("")
     const [password,setPasswor]=useState("")
     const handelSubmit=(event)=>{
        // if(alert(password.length>5?`${name} ${mail} ${password}`:"this field is manditary"))
         
       alert(`${name} ${mail} ${password}`)

        event.preventDefault();
     }
        return(<div>
           <h1>Apilicationform</h1>
           <form onSubmit={handelSubmit}>
               <div>
                   <label>username:</label>
                   <input type="name" value={name} onChange={(e)=>setName(e.target.value)}/>
               </div>
               <div>
                   <label>email:</label>
                   <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
               </div>
               <div>
                   <label>password:</label>
                   <input type="password" value={password} onChange={(e)=>setPasswor(e.target.value)}/>
               </div>
               <button type="submit" >submit</button>
           </form>
        </div>)
    
}
export default Apilicationform;