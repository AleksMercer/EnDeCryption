import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode, selectCopy, selectContent, selectEncrypted } from '../../store' // selectors import
import { copySwap } from '../../store' // reducers import


function CopyButton(props) {

  const window = props.window //left or right window

  const dispatch = useDispatch()

  const modeState = useSelector(selectMode)
  const copyState = useSelector(selectCopy)
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  const contentCopy = async () => {

    if ((window === 'left' && modeState) || (window === 'right' && !modeState)) {

      await navigator.clipboard.writeText(contentState)

    } else if ((window === 'left' && !modeState) || (window === 'right' && modeState)) {

      await navigator.clipboard.writeText(encryptedState)
    }
  }

  const copyTip = () => {
    if (copyState) return
    dispatch(copySwap())
    setTimeout(() => dispatch(copySwap()), 1000);
  }

  return (
    <button className='copy-btn'>
      <img 
        className='copy-icon' 
        draggable='false'
        src={require('../media/copy-icon.png')} 
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