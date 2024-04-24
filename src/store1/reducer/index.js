import { combineReducers } from "@reduxjs/toolkit";
import countReducer from './count'
import channelListReducer from './channelList'
export default combineReducers({
  count: countReducer,
  channelList: channelListReducer
})