// a função combineReducers combina todos os reducers em 1 unico
import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
  todos
})
