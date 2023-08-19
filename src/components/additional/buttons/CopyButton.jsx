import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode, selectCopyTip, selectContent, selectEncrypted, selectKey } from '../../../store' // selectors import
import { copyTipSwap } from '../../../store' // reducers import


function CopyButton(props) {

  const window = props.window //left, right or key window

  const dispatch = useDispatch()

  const keyState = useSelector(selectKey)
  const modeState = useSelector(selectMode)
  const copyTipState = useSelector(selectCopyTip)
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  const contentCopy = async () => {

    if ((window === 'left' && modeState) || (window === 'right' && !modeState)) {

      await navigator.clipboard.writeText(contentState)

    } else if ((window === 'left' && !modeState) || (window === 'right' && modeState)) {

      await navigator.clipboard.writeText(encryptedState)

    } else if (window === 'key') {

      await navigator.clipboard.writeText(keyState)
    }
  }

  const copyTip = () => {
    if ( (!contentState.length && window === 'left') || 
         (!encryptedState.length && window === 'right') ||
         (!keyState.length && window === 'key') ||
         copyTipState
    ) return

    dispatch(copyTipSwap())
    setTimeout(() => dispatch(copyTipSwap()), 1000);
  }

  return (
    <button className='copy-btn'>
      <img 
        className='copy-icon' 
        draggable='false'
        src={require('../../media/copy-icon.png')} 
        alt='+' 
        onClick={ () => {
          contentCopy()
          copyTip()
        }}
        />
    </button>
  )
}

export default CopyButton