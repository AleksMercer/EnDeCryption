import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode } from '../../store' // selectors import
import { changeContent, encryptionContent } from '../../store' // reducers import


function CleanButton(props) {

  const window = props.window //left or right window

  const modeState = useSelector(selectMode)

  const dispatch = useDispatch()

  const cleanContent = () => {

    if ((window === 'left' && modeState) || (window === 'right' && !modeState)) {

      dispatch(changeContent('')) 

    } else if ((window === 'left' && !modeState) || (window === 'right' && modeState)) {

      dispatch(encryptionContent(''))
    }
  }

  return (
    <button className='clean-btn'>
      <img 
        className='clean-icon' 
        draggable='false'
        src={require('../media/clean-icon.png')} 
        alt='+' 
        onClick={cleanContent}
        />
    </button>
  )
}

export default CleanButton