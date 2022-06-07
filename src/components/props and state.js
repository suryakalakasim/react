

import React from "react";


class Arrays extends React.Component {
    constructor(props){
        super(props)
     this.state = {
        //student:{ name:"kala", marks :"100" ,age:"24"}
    student:[{name:"kala" ,marks:"100",age:"24"} ,{name:"chitra",marks:"200",age:"22"},{name:"nani",marks:"150",age:"25"}]
    }
    console.log("student>>",this.state.student)
}
render(){
    return<div>
    {/*<h3> This is  {this.state.student.name} my marks are {this.state.student.marks} my age is {this.state.student.age}</h3>*/}
    <h3>This is {this.state.student[0].name} my marks are {this.state.student[0].marks}</h3>
    </div>

}
}
export default Arrays;