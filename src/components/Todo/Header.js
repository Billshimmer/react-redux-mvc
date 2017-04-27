import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };
    
    handleSave = text => {
        if (text.length !== 0) this.props.addTodo(text);
    };

    render(){
        return (
            <div>
                <h2>todos</h2>
                <TodoTextInput
                    value=''
                    placeholder='do something'
                    onSave={this.handleSave}
                />
            </div>
        )
    }
}
