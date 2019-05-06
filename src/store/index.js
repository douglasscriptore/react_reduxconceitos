// as variaiveis compose e applyMiddleware foram chamadas para importar o reactotron
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'

// caso o ambiente for de desenvolvuimento envia log para o reactotron
// define os middlewares do redux
const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
      applyMiddleware(...[]),
      console.tron.createEnhancer()
    )
    : applyMiddleware(...[])

const store = createStore(reducers, composer)

export default store
