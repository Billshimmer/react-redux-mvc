import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/counterActions';

class Counter extends Component {
    componentDidMount() {
        // 通过context的方法来拿store 最顶层有一个Prodiver组件来提供store
        let store = this.context.store;
        store.dispatch({ type: 'INCREMENT', value: 1 });
    }

    render() {
        let { value, actions } = this.props;
        return (
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <button onClick={() => actions.increment(1)}> + </button>
                <span>{value}</span>
                <button onClick={() => actions.decrement(1)}> - </button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number,
    actions: PropTypes.object,
};

Counter.contextTypes = {
    store: PropTypes.object,
};

const mapStateToProps = state => ({
    value: state.counters,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CounterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
