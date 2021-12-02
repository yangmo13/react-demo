
import {INCREAMENT,DECREAMENT} from "./constant"



export const  createIncrementAction =data=>({type:INCREAMENT,data})
export const  createDecrementAction= data=>({type:DECREAMENT,data})

export const createIncrementAsyncAction =data=>{
    const {time,value } = data
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(value))
        },time)
    }
}

