import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Counter from '../containers/Counter';
import Todo from '../containers/Todo';
import Nav from '../containers/Nav';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Route path="/">
                    <Nav>
                        <Route path="/todolist" component={Todo} />
                        <Route path="/counter" component={Counter} />
                    </Nav>
                </Route>
            </Router>
        );
    }
}

export default Routers;
