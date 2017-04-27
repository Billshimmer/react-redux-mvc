import * as types from '../constants/CounterActionTypes';

export const increment = value => ({ type: types.INCREMENT, value });
export const decrement = value => ({ type: types.DECREMENT, value });
