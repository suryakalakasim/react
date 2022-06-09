import React from "react";
import  Studentnipo from "./studentnipo"
import Dstraturingprops from "./destraturingofprops";
function Propertices(props){

    let arry =["ravi","raju","siva"]
    let object={name:"siva",age:"22",marks:"100"}
    let grade = false
   // let arrayofobject =[{name:"siva",age:"22"},{name:"ravi",age:"23"}]
    return <div>

{/*<Studentnipo student={arry} number={201} obj={object} studentgrade={grade?"gradeA":"gradeB"}arrayofobj={arrayofobject}/>*/}
 <Dstraturingprops obj={object}/>
 
    </div>
}
export default Propertices;