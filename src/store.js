import { configureStore, createSlice } from '@reduxjs/toolkit'


export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    contentValue: '',
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    changeContent: (state, action) => { state.contentValue = action.payload }
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})


/* selectMode - boolean value for mode choosing. const modeState = useSelector(selectMode) */
const selectMode = (state) => state.store.mode
/* selectContent - content from leftWindow. const contentState = useSelector(selectContent) */
const selectContent = (state) => state.store.contentValue

/* Export all selectors */
export { selectMode, selectContent }
//import { selectMode, selectContent } from '../../store' // selectors import

/* export reducers-func */
export const { modeSwap, changeContent } = globalStateStore.actions
// import { modeSwap, changeContent } from '../../store' // reducers import
