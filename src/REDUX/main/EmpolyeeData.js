import React, { useEffect, useState } from "react";
import axios from "axios";
import {useSelector,useDispatch} from 'react-redux';
import { EmpolyeeAcion } from "../redux/action";
const EmpolyeeData=()=>{
    const [state,setState]=useState([])
    const EmpolyeeInfo=useSelector(state=>state.EmpolyeeDetailes)
    const dispatch = useDispatch()
    console.log("empolyeeInfo",EmpolyeeInfo)
    useEffect(()=>{
    axios.get('http://209.209.41.154:8001/api/UserRegister/GetAll').then((res)=>{
        setState(res.data)
        dispatch(EmpolyeeAcion(res.data)) 
     })
    .catch((error)=>{
      console.log(error)
    })
    },[])
    return<div>
<h2>EMPOLYEE DATA</h2>
{EmpolyeeInfo?.length>0?EmpolyeeInfo?.map((item)=><h3>Id:{item.id} Email:{item.email} MobileNum:{item.mobileNumber}</h3>):<h4>data not found</h4>}
    </div>
}
export default EmpolyeeData;