import "./App.css";
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
import { UserProvider } from "./components/userContext";
import HooksMouse from "./components/HookMouse";
import MouseContiner from "./components/MouseContiner";
import IntervalCounter from "./components/IntervalConter";
import PostList from "./components/postlist";
import Counter from "./components/useMemo";
import PostForm from "./components/postForm";
import GetData from "./components/Httpget";
import FetchData from "./components/FetchData";
import DeletePost from "./components/DeletePost";

function App() {
  let stdDetails ={name:"siva",marks:"100",age:"20"}
  let array =["apple","bannana","orange","mango"]
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
{/*<Hooks/>*/}
{/*<Apilicationform/>*/}
{/*<UserProvider value={array} >
  <Component1/>
 </UserProvider>*/}
 {/* <HooksMouse/>*/}
{/* <MouseContiner/>*/}
{/*<IntervalCounter/>*/}
{/*<PostList/>*/}
{/*<Counter/>*/}
{/*<PostForm/>*/}
{/*<GetData/>*/}
{/*<FetchData/>*/}
<DeletePost/>
  </div>
    }

export default App;
