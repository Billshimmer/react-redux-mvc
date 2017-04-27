import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainBody extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };

    constructor(){
        super();
        this.onDelete = this.onDelete.bind(this)
    };

    onDelete(id){
        this.props.deleteTodo && this.props.deleteTodo(id);
    };

    render(){
        let { todos } = this.props;
        return (
            <div style={{marginTop: '100px'}}>
                {  
                    todos.map((item, index)=>{
                        return (
                            <div key={item.id}>
                                <span>{item.text}</span>
                                <button 
                                    style={{marginLeft: '20px'}} 
                                    onClick={()=>this.onDelete(item.id)}>
                                    删除
                                </button>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}
