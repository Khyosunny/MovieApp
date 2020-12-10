import { combineReducers } from 'redux';
import main from './main';
import detail from './datail';

const rootReducer = combineReducers({
  main,
  detail
})

export default rootReducer;