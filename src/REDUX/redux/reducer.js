import { EMPOLYEE_LIST } from "./actionType"
const initialState={
    EmpolyeeDetailes:[]
}

export default function EmpolyeeReducer(state=initialState,action){
    const{type,payload}=action
    switch(type){
case EMPOLYEE_LIST:
    return {...state,EmpolyeeDetailes:payload.value}
    default:
        return state
    }

}