import React, { Component } from 'react';
import store from "../../store/store"
import {createIncrementAction,createDecrementAction} from "../../store/countAction"

class Index extends Component {
    state = {
        count: 0
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <div>
                <h1>当前求值为 {store.getState()}</h1>
                <select name="" id="" ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increamentAdd}>+</button>&nbsp;
                <button onClick={this.reduceNum}>-</button>&nbsp;&nbsp;
                <button onClick={this.increamentOdd}>当求和结果为奇数时，加</button>&nbsp;
                <button onClick={this.increamentAsync}>异步加</button>&nbsp;
            </div>
        );
    }
    increamentAdd = () => {
        const { value } = this.selectNum
        store.dispatch(createIncrementAction(value))
    }
    reduceNum = () => {
        const { value } = this.selectNum
        store.dispatch(createDecrementAction(value))

    }
    increamentOdd = () => {
        const { value } = this.selectNum
        if (value % 2) {
            store.dispatch(createIncrementAction(value))
        }

    }
    increamentAsync = () => {
        setTimeout(() => {
            const { value } = this.selectNum
            store.dispatch(createIncrementAction(value))
        }, 300)

    }

}

export default Index;
