import React from "react";
class Conditionalrender extends React.Component{
    constructor(){
        super()
        this.state={
            massege: true
        }
    }
    render(){
        return<div>
            
           {this.state.massege?<h1>welcome jhon</h1>:<h1>welcome kala</h1>}
           {this.state.massege&&<h1>welcom jhon</h1>}
        </div>
        /*method-2
        let massege;
        if(this.state.massege){
            massege= <div>welcom jhon</div>
        }
        else{
            massege = <div>welcome kala</div>
        }*/
        //method-1
       /* if(this.state.massege){
           return<div>
               welcome jhon
           </div>
        }
        else{
          return<div>welcome kala</div>   
        }*/
        //return<div>
{/*<h1>{massege}</h1>*/}
       // </div>
    }
}
export default Conditionalrender;