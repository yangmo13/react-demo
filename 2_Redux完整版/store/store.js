import {createStore} from "redux"
import countReduce from "./countReduce"

export default createStore(countReduce)