import { configureStore, createSlice } from '@reduxjs/toolkit'

let cookie = atob(document.cookie.slice(9))

export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    copyTip: false,
    keyTip: false,
    contentValue: '',
    encryptedContent: '',
    key: cookie
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    copyTipSwap: (state) => { state.copyTip = !state.copyTip },
    keyTipSwap: (state) => { state.keyTip = !state.keyTip },
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
/* selectCopyTip - boolean value for mode choosing.  const copyTipState = useSelector(selectCopyTip) */
const selectCopyTip = (state) => state.store.copyTip
/* selectKeyTip - boolean value for mode choosing.  const keyTipState = useSelector(selectKeyTip) */
const selectKeyTip = (state) => state.store.keyTip
/* selectContent - content from leftWindow.       const contentState = useSelector(selectContent) */
const selectContent = (state) => state.store.contentValue
/* selectEncrypted - content from rightWindow.    const encryptedState = useSelector(selectEncrypted) */
const selectEncrypted = (state) => state.store.encryptedContent
/* selectKey - key from key-input.                const keyState = useSelector(selectKey) */
const selectKey = (state) => state.store.key


/* Export all selectors */
export { selectMode, selectCopyTip, selectKeyTip, selectContent, selectEncrypted, selectKey }
//import { selectMode, selectCopyTip, selectKeyTip, selectContent, selectEncrypted, selectKey } from '../../store' // selectors import

/* export reducers-func */
export const { modeSwap, copyTipSwap, keyTipSwap, changeContent, encryptionContent, generatedKey } = globalStateStore.actions
// import { modeSwap, copyTipSwap, keyTipSwap, changeContent, encryptionContent, generatedKey } from '../../store' // reducers import
