import { combineReducers } from 'redux'
import events from './events'

//count以外にあるときは列挙する
export default combineReducers({events})