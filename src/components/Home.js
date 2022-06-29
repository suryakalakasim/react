import React from "react";
import{Link} from 'react-router-dom'
function Home(){
    return<div>
        <h1 style={{color:"red"}}>This is an Homepage</h1>
        <Link className="link" to='/image'>image</Link>
        <Link className="link" to='/about'>image</Link>
    </div>
}
export default Home;