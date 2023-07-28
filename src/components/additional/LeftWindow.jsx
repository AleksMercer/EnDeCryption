import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeValue } from '../../store'

function LeftWindow() {

  const dispatch = useDispatch()
  const content = useSelector(state => state.store.textAreaValue)
  const swapValue = useSelector(state => state.store.mode)

  //#region — Change placeholder in textarea
  
  let placeholder = ''

  if (swapValue) {
    placeholder = 'Type something for EnCryption'
  } else {
    placeholder = 'Type something for DeCryption'
  }

  //#endregion

  return (
    <div className='windows_left'>
      
      <textarea
        placeholder={placeholder}
        name='content'
        value={content}
        onChange={ (e) => dispatch(changeValue(e.target.value)) }
        maxLength={2000}
        autoFocus
      />

      <button className='copy_btn'>
        <img 
          className='copy-icon' 
          draggable='false'
          src={require('../media/copy-icon.png')} 
          alt='+' />
      </button>

    </div>
  )
}

export default LeftWindow