import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import MainBody from '../components/MainBody';
import * as TodoActions from '../actions';

const App = ({ todos, actions }) => (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
        <Header addTodo={actions.addTodo} />
        <div>here is Todolist here</div>
        <MainBody todos={todos} deleteTodo={actions.deleteTodo} />
    </div>
);

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
