import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelListReducer from "./modules/channelListStore";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    channelList: channelListReducer
  }
})


export default store