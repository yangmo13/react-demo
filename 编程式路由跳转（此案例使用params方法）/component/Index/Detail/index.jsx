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
                    //    return <li key={item.id}><Link to={{pathname:"/index/detail/message",state:{id:item.id,title:item.title}}}>{item.title}</Link></li>
                    return <div key={item.id}><li  onClick={()=>{this.goMessage(item)}}>push跳转</li> <li key={item.id} onClick={()=>{this.replaceMessage(item)}}>替换跳转</li></div>
                 })}

                </ul>
                <hr />
                <div>
                    <Route path="/index/detail/message/:id/:title" component={Message}></Route>
                </div>
            </div>
        );
    }
    goMessage=(item)=>{
        const {id,title} =  item
        console.log(this,'this')
        this.props.history.push(`/index/detail/message/${id}/${title}`)
    }
    replaceMessage=(item)=>{
        const {id,title} =  item
        this.props.history.replace(`/index/detail/message/${id}/${title}`)

    }
}

export default Index;
