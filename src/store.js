import { configureStore, createSlice } from '@reduxjs/toolkit'

let cookie = atob(document.cookie.slice(9))

export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    copyMode: false,
    contentValue: '',
    encryptedContent: '',
    key: cookie
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    copySwap: (state) => { state.copyMode = !state.copyMode },
    changeContent: (state, action) => { state.contentValue = action.payload },
    encryptionContent: (state, action) => { state.encryptedContent = action.payload },
    generatedKey: (state, action) => { state.key = action.payload },
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
/* selectKey - key from key-input.                const keyState = useSelector(selectKey) */
const selectKey = (state) => state.store.key


/* Export all selectors */
export { selectMode, selectCopy, selectContent, selectEncrypted, selectKey }
//import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import

/* export reducers-func */
export const { modeSwap, copySwap, changeContent, encryptionContent, generatedKey } = globalStateStore.actions
// import { modeSwap, copySwap, changeContent, encryptionContent, generatedKey } from '../../store' // reducers import
