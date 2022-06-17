import "./App.css";
import React, { createContext, useContext } from "react";
import ComponentA from "./components/componentA";
import Arrays from "./components/props and state";
import Propertices from "./components/props";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EvenntBind from "./components/EventBind";
import UseStatehook from "./components/Hooks";
import Conditionalrender from "./components/conditinal rendaringMethods";
import List from "./components/listofrendering";
import Lifecyclemethod from "./components/lifecycle";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/HoverCounter";
import Component1 from "./components/component1";
import Form from "./components/form";
import Apilicationform from "./components/apform";
import Hooks from "./components/useEffect";

export const context = createContext()
function App() {
  let stdDetails ={name:"siva",marks:"100",age:"20"}
   return <div className="App">      
{/*<List/>*/}
{/*<ComponentA/>*/}
{/*<Arrays/>*/}
{/*<Propertices/>*}
{/*<FunctionClick/>*/}
{/*<ClassClick/>*/}
{/*<EvenntBind/>*/}
{/*<Conditionalrender/>*/}
{/*<UseStatehook/>*/}
{/*<Lifecyclemethod/>*/}
{/*<ClickCounter/>*/}
{/*<HoverCounter/>*/}
{/*<Form/>*/}
<Hooks/>
{/*<Apilicationform/>*/}
  {/*<Component1/>*/}
  </div>
    }

export default App;
