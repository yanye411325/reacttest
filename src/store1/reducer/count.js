const initialState = {count: 0}
const countReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    console.log('11')
    return {
      ...state,
      count: state.count  + 1
    }
  }
  if (action.type === 'decrement') {
    return {
      count: state.count  - 1
    }
  }
  return state
}

export default countReducer