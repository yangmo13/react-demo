import React, { Component } from 'react';
import { Link, Route, Routes } from "react-router-dom"
import Detail from "./Detail"

class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/index/detail">详情</Link>
           
                    <Route  path="/index/detail" element={<Detail></Detail>}></Route>
             

            </div>
        );
    }
}

export default Index;
