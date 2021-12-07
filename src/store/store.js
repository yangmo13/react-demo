import {createStore,applyMiddleware} from "redux"
import countReduce from "./reduces/count"
import thunk from "redux-thunk"


export default createStore(countReduce,applyMiddleware(thunk))