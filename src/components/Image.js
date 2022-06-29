import React from "react";
import {Link} from 'react-router-dom';
function Image(){
    const arry=["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg"]
    return<div>
<h3>This are the images</h3>
{/* <img src={arry[1]} alt="image are missing" height={100} width={100}/> */}
    {arry.map((item,index)=><img className="img" key={index} src={item} alt="image are missing" height={100} width={100}/>)}
    <Link className="link" to='/'>back to home</Link>
    </div>
}
export default Image;