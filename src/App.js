import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import TodoList from './TodoList'

const App = () => (
  // O provider passa para todos os componentes dentro dele a informação sobre o estado do redux
  <Provider store={store}>
    <TodoList />
  </Provider>
)

export default App
