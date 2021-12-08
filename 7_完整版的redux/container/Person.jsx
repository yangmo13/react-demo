import React, { Component } from 'react';
import {connect} from "react-redux"
import {addPerson} from "../store/actions/person"
import {nanoid} from "nanoid"

class Person extends Component {
    add=()=>{
        let name = this.nameNode.value
        let age  = this.ageNode.value
        console.log(name,age)
        this.props.addPerson({id:nanoid(),name,age})
  
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" ref={c=>this.nameNode =c} />
                <input type="text" ref={c=>this.ageNode =c} />
                <button onClick={this.add}>添加</button>
                <div>
                    <h4>上方内容为count：{this.props.count}</h4>
                    <ul>
                        {this.props.person.map(item=>{
                            return <li key={item.id}>{item.name} ---- {item.age}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}


export default connect((state)=>({person:state.person,count:state.count}),{
    addPerson
})(Person);

