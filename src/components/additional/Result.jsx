import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import
import { changeContent, encryptionContent } from '../../store' // reducers import

function Result() {

  const dispatch = useDispatch()
  const modeState = useSelector(selectMode) // boolean
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  const encryption = () => {
    dispatch( encryptionContent( btoa(contentState) ) )
  }

  const decryption = () => {
    dispatch( changeContent( atob(encryptedState) ) )
  }
  

  return (
    <button 
      className='result'
      onClick={modeState ? encryption : decryption}
      >
      Result
    </button>
  )
}

export default Result