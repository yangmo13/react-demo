import React, { Component } from 'react';
import qs from "querystring"

class Index extends Component {

    render() {
        console.log(qs.parse(this.props.location.search))
        const datas = [
            {
                id: 1, content: "这就是爱"
            }, {
                id: 2, content: "回来"
            }, {
                id: 3, content: "情人"
            },
        ]
        const {search } = this.props.location
        const {id,title } = qs.parse(search.slice(1))
        const content = datas.find(item=>item.id == id)
        console.log(content,'content')
        return (
            <div>
                <div>新闻id：{id}</div>
                <div>新闻标题：{title}</div>
                <div>新闻内容：{content.content}</div>
            </div>
        );
    }
}

export default Index;
