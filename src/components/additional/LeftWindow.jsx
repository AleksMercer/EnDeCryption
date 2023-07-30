import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CopyButton from './CopyButton'

import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import
import { changeContent, encryptionContent } from '../../store' // reducers import

function LeftWindow() {

  const dispatch = useDispatch()
  const modeState = useSelector(selectMode) // boolean
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  return (
    <div className='windows_left'>
      
      <textarea
        placeholder={modeState ? 'Type something for EnCryption' : 'Type something for DeCryption'}
        name='content'
        value={modeState ? contentState : encryptedState}
        maxLength={2000}
        onChange={ modeState ? 
          (e) => dispatch(changeContent(e.target.value)) 
          : 
          (e) => dispatch(encryptionContent(e.target.value)) 
        }
        autoFocus
      />

      <CopyButton window='left' />
      
    </div>
  )
}

export default LeftWindow