import React,{useState} from "react";

function UseStatehook(){
    const[color,setcolor]=useState("red")
    const[state,setstate]=useState({name:"kala",age:"24",marks:"100"})
    const[value,setvalue]=useState([{color:"green",brand:"oppo"},{color:"yelllow",brand:"apple"},{color:"blue",brand:"vivo"}])
console.log("value>>",value)
const object= value.map(({color,brand})=>{
     return //<p>the mobile color {color} and its brand {brand}</p>
})
    return<div>
        <h2>my name is {state.name} my age {state.age} my marks are{state.marks}</h2>
        <h3>the color of mobile {value[0].color} brand is {value[0].brand}</h3>
       <h3>{object}</h3>
       <table>
           <tbody>
               <tr>
               <td>S.no</td>

                   <td>color</td>
                   <td>brand</td>
               </tr>
           </tbody>
           <tbody>
               {value.map((x,i)=><tr key={i}>
                   <td>{i+1}</td>
                   <td>{x.color}</td>
                   <td>{x.brand}</td>
               </tr>)}
           </tbody>
       </table>
        <h1>My car color is {color}</h1>
<button onClick={()=>setcolor("blue")}>click</button>
    </div>
}
export default UseStatehook;