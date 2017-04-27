import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Header, MainBody } from '../components/Todo';
import * as TodoActions from '../actions/todoActions';

class Todo extends Component {
    render(){
        let { todos, actions } = this.props

        return (
            <div style={{margin: '0 auto', textAlign: 'center'}}>
                <Header addTodo={actions.addTodo} />
                <div>here is Todolist here</div>
                <MainBody todos={todos} deleteTodo={actions.deleteTodo} />
            </div>
        )
    };
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
