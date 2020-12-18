import {combineReducers} from 'redux'
import main from './main'
import detail from './detail'
import list from './list'
import listDetail from './listDetail'

const rootReducer = combineReducers({
  main,
  detail,
  list,
  listDetail,
})

export default rootReducer
