import React, { Component } from 'react';
import Count from "./container/Count"
import Person from "./container/Person"
import Other from "./container/Other"

class App extends Component {
    render() {
        return (
            <div>
               <Count></Count>
               <hr/>
               <Person></Person>
               <hr/>
               <Other></Other>
            </div>
        );
    }
}

export default App;
