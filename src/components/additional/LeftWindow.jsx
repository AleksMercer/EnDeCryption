import React from 'react'

function LeftWindow() {

  return (
    <div className='windows_left'>
      
      <textarea
        placeholder='Type something for DeCryption'
        name='content'
        // ref={textAreaRef}
        // value={content}
        // onChange={ (e) => setContent(e.target.value) }
        // onBlur={blur}
        // onFocus={handleFocus}
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