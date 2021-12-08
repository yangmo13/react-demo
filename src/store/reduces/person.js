import { ADD_PERSON } from "../constant";



const initState = [{ id: "001", name: "王老二", age: 11 }]
export default function addPerson(perState=initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...perState];
        default:
            return perState
    }
}