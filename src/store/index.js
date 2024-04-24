// RTK方式
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counterStore'
import channelListReducer from "./modules/channelListStore";
const store = configureStore({
  reducer: {
    count:  counterReducer,
    channel: channelListReducer
  }
})

export default store