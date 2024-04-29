import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    decrement(state) {
      state.count --
    },
    increment(state) {
      state.count ++
    },
    addToNum(state, action) {
      state.count += action.payload
    }
  }
})

const {decrement,increment, addToNum} = counterStore.actions

const counterReducer = counterStore.reducer

export {
  increment,
  decrement,
  addToNum
}

export default counterReducer