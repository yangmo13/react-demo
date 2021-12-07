import React, { Component } from 'react';

class Person extends Component {
    add=()=>{
        let name = this.nameNode.value
        let age  = this.ageNode.value
        console.log(name,age)
    }
    render() {
        return (
            <div>
                <input type="text" ref={c=>this.nameNode =c} />
                <input type="text" ref={c=>this.ageNode =c} />
                <button onClick={this.add}>添加</button>
                <div>
                    <ul>
                        <li>名字----年龄</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Person;
