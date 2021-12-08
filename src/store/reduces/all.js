import { ALL_NUM, ONE } from "../constant";


const initState = 999
export default function statistics(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ALL_NUM:
            console.log(data,preState,'data')
            return  preState  - Number(data.value);
        case ONE:
            return  preState + Number(data.value);
        default:
            return preState
    }
}