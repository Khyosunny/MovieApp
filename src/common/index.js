import {combineReducers} from 'redux'
import main from './main'
import detail from './detail'
import list from './list'

const rootReducer = combineReducers({
  main,
  detail,
  list,
})

export default rootReducer
