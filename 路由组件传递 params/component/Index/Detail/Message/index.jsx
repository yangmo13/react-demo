import React, { Component } from 'react';

class Index extends Component {

    render() {
        const { id, title } = this.props.match.params
        const datas = [
            {
                id: 1, content: "这就是爱"
            }, {
                id: 2, content: "回来"
            }, {
                id: 3, content: "情人"
            },
        ]
        const content = datas.find(item=>item.id == id)
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
