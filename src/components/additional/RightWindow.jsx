import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function RightWindow() {

  const dispatch = useDispatch()
  const content = useSelector(state => state.store.textAreaValue)
  const swapValue = useSelector(state => state.store.mode)

  //#region — Change placeholder in textarea

  let placeholder = ''

  if (swapValue) {
    placeholder = 'EnCryption result'
  } else {
    placeholder = 'DeCryption result'
  }

  //#endregion

  return (
    <div className='windows_right'>

      <textarea
        placeholder={placeholder}
        name='content'
        value={btoa(content)}
        disabled
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

export default RightWindow