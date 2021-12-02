import {INCREAMENT,DECREAMENT} from "./constant"


const initState = 0
export default function countReduce(preState = initState, action) {
    const { type, data } = action

    switch (type) {
        case INCREAMENT:
            return preState + data * 1
        case DECREAMENT:
            return preState - data * 1
        default:
            return preState

    }
}