import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {applyMiddleware} from 'redux'
import interceptorMiddlewre from './interceptorMiddleware'

export default applyMiddleware(
  thunk,
  logger,
  interceptorMiddlewre
)
