import { INCREMENT, DECREMENT } from '../constants/CounterActionTypes.js';

const InitialState = 0;

export default function counters(state = InitialState, action) {
    switch (action.type) {
        case INCREMENT:
            console.log('inc', state)
            return state + 1;
        case DECREMENT:
            console.log('dec', state)
            return state - 1;
        default:
            return state;
    }
}
