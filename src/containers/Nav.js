import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component{
    render(){
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to='/todolist'>Todo</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                </ul>
                { this.props.children || "子模块没有加载" }
            </div>
        )
    }
}

export default App
