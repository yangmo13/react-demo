import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class Index extends Component {
    componentDidMount(){
       PubSub.subscribe('gogogo',(_,data)=>{
           console.log(data)
       })
    }
    render() {
        return (
            <div>
                LIST
            </div>
        );
    }
}

export default Index;
