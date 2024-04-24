import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const url = 'https://api.thepaper.cn/userservice/user/web/getLoginStatus'

const channelListStore = createSlice({
  name: 'channelList',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload
    }
  }
})

const {setChannelList} = channelListStore.actions
const channelListReducer = channelListStore.reducer

const fetchChannelList = () => {
  return async(dispatch) => {
    const res = await axios.get(url)
    const data = [res.data.code]
    dispatch(setChannelList(data))
  }
}

export {fetchChannelList}

export default channelListReducer