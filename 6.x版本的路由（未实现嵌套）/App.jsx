import React from 'react'
import "./App.css"
import { Routes, Route, NavLink } from "react-router-dom"
import List from "./component/List"
import Index from "./component/Index"
import Default from "./component/Default"

export default function App() {
    return (
        <div>
            <div className="user">
                <div className="web-header">标题</div>
                <div className="web-body">
                    <div className="web-left-menu">
                        <div className="left-mexu-list">
                            <NavLink to="/index" className="left-mexu-list">index</NavLink>
                            <NavLink to="/list" className="left-mexu-list">list </NavLink>

                        </div>
                    </div>
                    <div className="web-right-main">
                        <Routes>
                            <Route path="/index" element={<Index></Index>}></Route>
                            <Route path="/list/*" element={<List></List>}></Route>
                            <Route path="*" element={<Default path="/"></Default>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
