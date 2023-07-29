import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CopyButton from './CopyButton'

import { selectMode, selectContent } from '../../store' // selectors import
import { changeContent } from '../../store' // reducers import

function LeftWindow() {

  const dispatch = useDispatch()
  const modeState = useSelector(selectMode) // boolean
  const contentState = useSelector(selectContent)

  return (
    <div className='windows_left'>
      
      <textarea
        placeholder={modeState ? 'Type something for EnCryption' : 'Type something for DeCryption'}
        name='content'
        value={contentState}
        onChange={ (e) => dispatch(changeContent(e.target.value)) }
        maxLength={2000}
        autoFocus
      />

      <CopyButton />
      
    </div>
  )
}

export default LeftWindow