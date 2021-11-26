import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class Index extends Component {
    render() {
        return (
            <div>
                <button onClick={this.test}>测试兄弟传参</button>
            </div>
        );
    }
    test=()=>{
        console.log('test')
        PubSub.publish('gogogo',{name:"王大喜"})
    }
}

export default Index;
