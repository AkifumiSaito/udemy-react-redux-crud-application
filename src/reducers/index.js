import { combineReducers } from 'redux'
import count from './count'

//count以外にあるときは列挙する
export default combineReducers({count})