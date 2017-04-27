import { ADD_TODO, DELETE_TODO } from '../constants/TodoActionTypes.js';

const InitialState = [
    {
        text: 'react redux',
        id: 0,
    },
];

export default function todos(state = InitialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
                    text: action.text,
                },
            ];
        case DELETE_TODO:
            return state.filter((item, index) => item.id !== action.id);
        default:
            return state;
    }
}
