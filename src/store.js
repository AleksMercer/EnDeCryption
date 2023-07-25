import { configureStore, createSlice } from '@reduxjs/toolkit'

export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true
    // value: 10,
  },
  
  reducers: {

    modeSwap: (state) => !state.mode
  /*increment: (state,action) => {state.value += 1
    console.log(action)},
    decrement: (state) => {state.value -= 1},
    incrementByAmount: (state, action) => {state.value += action.payload},*/
  },
})

export const store = configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})

//export const {  } = globalStateStore.actions