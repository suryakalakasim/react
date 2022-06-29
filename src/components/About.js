import React from "react";
import {Link} from 'react-router-dom';
function About(){
    return<div>
        <h1 style={{color:"green"}}>We are in Aboutpage</h1>
        <Link className="link" to='/'>back to home</Link>
    </div>
}
export default About;