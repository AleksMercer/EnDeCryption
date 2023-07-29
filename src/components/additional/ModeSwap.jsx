import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode } from '../../store' // selectors import
import { modeSwap } from '../../store' // reducers import

function ModeSwap() {

  const dispatch = useDispatch()
  const modeState = useSelector(selectMode)

  //#region — change body classname for change theme

  const body = document.body.classList

  if (modeState) {
    body.add('encryption')
    body.remove('decryption')
  } else {
    body.remove('encryption')
    body.add('decryption')
  }

  //#endregion

  return (
    <button className='mode-swap'>
       <img 
        className={`swap-icon ${modeState ? 'rotate' : 'unrotate'}`}
        src={require('../media/swap-icon.png')} alt='—><—' 
        onClick={() => dispatch(modeSwap())}
        draggable='false'
       />
    </button>
  )
}

export default ModeSwap