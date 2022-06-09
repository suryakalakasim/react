import React from "react";
function List(){
    const persons = [{id:"1",name:"ravi",age:"23",skils:"angular"},
        {id:"2",name:"raju",age:"22",skils:"java"},
        {id:"3",name:"savi",age:"25",skils:"python"}]
        const personslist =persons.map(persons=><h1 key={"id"}>i am {persons.name} i am {persons.age} years old i known skils are {persons.skils}</h1>)
        
    return<div>
         {personslist}
         
    </div>
}
export default List;