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
import TernaryOparetor from "./components/ternery";
import UseReducer from "./components/useReducer";
import Todos from "./components/new";
import FocusInput from "./components/Focues";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Image from "./components/Image";
import Home from "./components/Home";
import About from "./components/About";
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
{/*<DeletePost/>*/}
{/*<TernaryOparetor/>*/}
{/* <UseReducer/> */}
{/* <Todos/> */}
{/* <FocusInput/> */}
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/image' element={<Image/>}/>
  <Route path='/about' element={<About/>}/>
</Routes>
</BrowserRouter>

  </div>
    }

export default App;
