import { configureStore, createSlice } from '@reduxjs/toolkit'


export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})


export const selectMode = (state) => state.store.mode

export const { modeSwap } = globalStateStore.actions