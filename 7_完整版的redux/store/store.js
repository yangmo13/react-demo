import {createStore,applyMiddleware,combineReducers} from "redux"
import countReduce from "./reduces/count"
import personReduce from "./reduces/person"
import allRe from "./reduces/all"
import thunk from "redux-thunk"

const allReduce = combineReducers({
    count:countReduce,
    person:personReduce,
    all:allRe
})

export default createStore(allReduce,applyMiddleware(thunk))