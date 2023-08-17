import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode } from '../../../store' // selectors import
import { modeSwap, changeContent, encryptionContent } from '../../../store' // reducers import

function ModeSwap() {

  const dispatch = useDispatch()

  const modeState = useSelector(selectMode)

  //#region — change body classname for change theme

  const body = document.body.classList

  if (modeState) {
    body.add('encryption')
    body.remove('decryption')
    document.title = 'EnCryption'
  } else {
    body.remove('encryption')
    body.add('decryption')
    document.title = 'DeCryption'
  }

  //#endregion

  return (
    <button className='mode-swap'>
       <img 
        className={`swap-icon ${modeState ? 'rotate' : 'unrotate'}`}
        src={require('../../media/swap-icon.png')} alt='—><—' 
        onClick={() => {
          dispatch(modeSwap())
          dispatch(changeContent(''))       
          dispatch(encryptionContent(''))
        }}
        draggable='false'
       />
    </button>
  )
}

export default ModeSwap