import React, { Component } from 'react';
import { connect } from "react-redux"
import {allNumber} from "../store/actions/other";
import {ALL_NUM,ONE} from "../store/constant"

class Other extends Component {
    all=()=>{
        this.props.allChange({type:ALL_NUM,value:1})
    }
    one=()=>{ this.props.allChange({type:ONE,value:1})}
    render() {
        console.log(this.props)
        return (
            <div>
                rcc
                <h2>{this.props.all}</h2>
                <div>
                    <button onClick={this.all}>all</button>
                    <button onClick={this.one}>one</button>
                </div>
            </div>
        );
    }
}


export default connect((state)=>({all:state.all}),{
    allChange:allNumber
})(Other)
