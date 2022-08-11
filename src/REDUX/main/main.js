import React from "react";
import { Provider } from "react-redux";
import Store from "../store/store";
import EmpolyeeData from "./EmpolyeeData";
 const Redux=()=>{
     return<>
     <Provider store={Store}>
         <EmpolyeeData/>
     </Provider>

     </>
 }
 export default Redux;