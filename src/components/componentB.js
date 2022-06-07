import React from "react";
class ComponentB extends React.Component {
    render(){
        console.log(this.props,'props==>');
    return <div>
      
        <button className="clickbutton" type="button" onClick={this.props.stateSate}>click</button>
    
    </div>
    }
}
export default ComponentB;