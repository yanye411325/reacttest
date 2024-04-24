const initialState = {channelList: []}
const channelListReducer = (state = initialState, action) => {
  if (action.type === 'setChannel') {
    return {
      ...state,
      channelList: action.payload
    }
  }
  return state
}

export default channelListReducer