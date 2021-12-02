import {createStore,applyMiddleware} from "redux"
import countReduce from "./countReduce"
import thunk from "redux-thunk"


export default createStore(countReduce,applyMiddleware(thunk))