import counterReducer from './counterReducer'
import booleanReducer from './booleanReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  counter: counterReducer,
  boolean: booleanReducer,
})

export default reducer
