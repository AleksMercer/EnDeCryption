import React from 'react'
import { useSelector } from 'react-redux'

import { selectMode, selectContent, selectEncrypted } from '../../store' // selectors import

function CopyButton(props) {

  const window = props.window //left or right window

  const modeState = useSelector(selectMode) // boolean
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  const contentCopy = async () => {

    if ((window === 'left' && modeState) || (window === 'right' && !modeState)) {

      await navigator.clipboard.writeText(contentState)

    } else if ((window === 'left' && !modeState) || (window === 'right' && modeState)) {

      await navigator.clipboard.writeText(encryptedState)
    }
  }

  return (
    <button className='copy_btn'>
      <img 
        className='copy-icon' 
        draggable='false'
        src={require('../media/copy-icon.png')} 
        alt='+' 
        onClick={contentCopy}
        />
    </button>
  )
}

export default CopyButton