import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import App from './containers/App'
// import Todolist from './containers/TodoList'
// import reducer from './reducers'
// import 'todomvc-app-css/index.css'
let reducer = ()=>{}
const store = createStore(reducer)

render(
  <Provider store={store}>
    <div>
      {/*<App />*/}
      here is Todolist here
    </div>
  </Provider>,
  document.getElementById('root')
)
