import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Routers from './routers'
// import 'todomvc-app-css/index.css'
export const store = createStore(reducer);

render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('root'),
);
