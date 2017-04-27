import { INCREMENT, DECREMENT } from '../constants/CounterActionTypes.js';

const InitialState = 0;

export default function counters(state = InitialState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
