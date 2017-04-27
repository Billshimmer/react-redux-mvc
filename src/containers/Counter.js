import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Counter extends Component{
    render(){
        return (
            <div style={{margin: '0 auto', textAlign: 'center'}}>
                <button> - </button>
                <span>0</span>
                <button> + </button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number,
    actions: PropTypes.object,
};

export default Counter