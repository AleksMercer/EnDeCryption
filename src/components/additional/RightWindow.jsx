import React from 'react'

function RightWindow() {

  return (
    <div className='windows_right'>

      <textarea
        placeholder='DeCryption result'
        name='content'
        // ref={textAreaRef}
        // value={content}
        // onChange={ (e) => setContent(e.target.value) }
        // onBlur={blur}
        // onFocus={handleFocus}
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