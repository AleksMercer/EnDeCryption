import React from 'react'
import { useSelector } from 'react-redux'

import CopyButton from './buttons/CopyButton'
import CleanButton from './buttons/CleanButton'

import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import

function RightWindow() {

  const modeState = useSelector(selectMode)
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  return (
    <div className='windows_right'>

      <textarea
        placeholder={modeState ? 'EnCryption result' : 'DeCryption result'}
        name='content'
        value={modeState ? encryptedState : contentState}
        disabled
      />

      <CopyButton window='right' />
      
      <CleanButton window='right' />
      
    </div>
  )
}

export default RightWindow