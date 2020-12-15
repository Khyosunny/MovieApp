import {combineReducers} from 'redux'
import main from './main'
import detail from './detail'

const rootReducer = combineReducers({
  main,
  detail,
})

export default rootReducer
