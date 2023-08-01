import { configureStore, createSlice } from '@reduxjs/toolkit'


export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    copyMode: false,
    contentValue: '',
    encryptedContent: '',
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    copySwap: (state) => { state.copyMode = !state.copyMode },
    changeContent: (state, action) => { state.contentValue = action.payload },
    encryptionContent: (state, action) => { state.encryptedContent = action.payload },
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})


/* selectMode - boolean value for mode choosing.  const modeState = useSelector(selectMode) */
const selectMode = (state) => state.store.mode
/* selectCopy - boolean value for mode choosing.  const copyState = useSelector(selectCopy) */
const selectCopy = (state) => state.store.copyMode
/* selectContent - content from leftWindow.       const contentState = useSelector(selectContent) */
const selectContent = (state) => state.store.contentValue
/* selectEncrypted - content from rightWindow.    const encryptedState = useSelector(selectEncrypted) */
const selectEncrypted = (state) => state.store.encryptedContent


/* Export all selectors */
export { selectMode, selectCopy, selectContent, selectEncrypted }
//import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import

/* export reducers-func */
export const { modeSwap, copySwap, changeContent, encryptionContent } = globalStateStore.actions
// import { modeSwap, copySwap, changeContent, encryptionContent } from '../../store' // reducers import
