import {combineReducers} from 'redux'
import main from './main'
import detail from './detail'
import list from './list'
import listDetail from './listDetail'
import like from './like'

const rootReducer = combineReducers({
  main,
  detail,
  list,
  listDetail,
  like,
})

export default rootReducer
