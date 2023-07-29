import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CopyButton from './CopyButton'

import { selectMode, selectContent } from '../../store' // selectors import

function RightWindow() {

  //const dispatch = useDispatch()
  const modeState = useSelector(selectMode)
  const contentState = useSelector(selectContent)

  return (
    <div className='windows_right'>

      <textarea
        placeholder={modeState ? 'EnCryption result' : 'DeCryption result'}
        name='content'
        value={btoa(contentState)}
        disabled
      />

      <CopyButton />
      
    </div>
  )
}

export default RightWindow