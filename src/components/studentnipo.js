import React from "react";

function Studentnipo(props){
    console.log("student>>>",props)
    let theobject=props.arrayofobj
    console.log("theobj",theobject)
    const studentdetiles= theobject.map(()=>{
        return(theobject[1])
    });
    console.log("detiles>>",studentdetiles)

    return(
        <div>
            <h3>student1:{studentdetiles[1].name}</h3>
<h1>i am {props.student[0]} my rollnumber is {props.number}</h1>
<h2>i am {props.obj.name} my grade is {props.studentgrade}</h2>

        </div>
    )
}
export default Studentnipo;