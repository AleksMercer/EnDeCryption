import { configureStore, createSlice } from '@reduxjs/toolkit'


export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    textAreaValue: '',
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    changeValue: (state, action) => { state.textAreaValue = action.payload }
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})


export const selectMode = (state) => state.store.mode

export const { modeSwap, changeValue } = globalStateStore.actions