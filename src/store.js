import { configureStore, createSlice } from '@reduxjs/toolkit'


export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    contentValue: '',
    encryptedСontent: '',
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    changeContent: (state, action) => { state.contentValue = action.payload },
    encryptionContent: (state, action) => { state.encryptedСontent = action.payload },
    decryptionContent: (state, action) => { state.contentValue = action.payload },
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})


/* selectMode - boolean value for mode choosing.  const modeState = useSelector(selectMode) */
const selectMode = (state) => state.store.mode
/* selectContent - content from leftWindow.       const contentState = useSelector(selectContent) */
const selectContent = (state) => state.store.contentValue
/* selectEncrypted - content from rightWindow.    const encryptedState = useSelector(selectEncrypted) */
const selectEncrypted = (state) => state.store.encryptedСontent

/* Export all selectors */
export { selectMode, selectContent, selectEncrypted }
//import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import

/* export reducers-func */
export const { modeSwap, changeContent, encryptionContent, decryptionContent } = globalStateStore.actions
// import { modeSwap, changeContent, encryptionContent, decryptionContent } from '../../store' // reducers import
