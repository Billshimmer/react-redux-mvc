import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
// import Todolist from './containers/TodoList'
import reducer from './reducers'
// import 'todomvc-app-css/index.css'
const store = createStore(reducer)

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
