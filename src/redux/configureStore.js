import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import middlewares from '../middlewares'
import { User } from './user'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      user: User,
    }),
    compose(
      middlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  )
  return store
}
