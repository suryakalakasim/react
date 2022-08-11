import {createStore} from "redux";
import EmpolyeeReducer from '../redux/reducer';
 const Store = createStore(
     EmpolyeeReducer
 )
 export default Store;