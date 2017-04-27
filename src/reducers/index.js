import { combineReducers } from 'redux';
import todos from './todos';
import counters from './counters';

const rootReducer = combineReducers({
    todos,
    counters
});

export default rootReducer;
