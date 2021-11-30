import React, { Component } from 'react';
import { Link, Route } from "react-router-dom"
import Message from "./Message"

class Index extends Component {
    state = {
        list: [
            {
                id: 1, title: "中国新闻",
            },
            {
                id: 2, title: "英国新闻",
            },
            {
                id: 3, title: "小日本新闻"
            }


        ]
    }
    render() {
        return (
            <div>
                <ul>
                   {this.state.list.map(item=>{
                       return <li key={item.id}><Link to={{pathname:"/index/detail/message",state:{id:item.id,title:item.title}}}>{item.title}</Link></li>
                   })}

                </ul>
                <hr />
                <div>
                    <Route path="/index/detail/message" component={Message}></Route>
                </div>
            </div>
        );
    }
}

export default Index;
