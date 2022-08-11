import { EMPOLYEE_LIST } from "./actionType";
export const EmpolyeeAcion = (value) => {
    return {
        type: EMPOLYEE_LIST,
        payload:{value}
    }

}