import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        text: PropTypes.string,
    };
    state = {
        text: this.props.text || '',
    };

    onChange = e => {
        this.setState({ text: e.target.value });
    };

    handleSubmit = e => {
        let text = e.target.value.trim();
        if (e.keyCode === 13) {
            this.props.onSave && this.props.onSave(text);
            this.setState({ text: '' });
        }
    };

    render() {
        return (
            <input
                type="text"
                placeholder={this.props.placeholder}
                value={this.state.text}
                onChange={this.onChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}
