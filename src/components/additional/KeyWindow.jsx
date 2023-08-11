import React, { useState } from 'react'

function KeyButton() {

  const [keyWindow, setKeyWindow] = useState(false)  

  return (
  <>
    <button className='key-btn' onClick={() => setKeyWindow(true)} >
      <img
      className='key-icon'
      draggable='false'
      src={require('../media/key-icon.png')}
      alt='Key' />
    </button>

    { keyWindow &&
      <div className='key-window'>

        <h2>Key</h2>

        <span>32 / 32</span>
        
        <input 
          className='key-input' 
          type='text' 
          name='key'
          id='1'
          maxlength='32'
          placeholder='Type or generate key'
        />

        <button 
          className='generate'
          //onClick={}
          >
          Generate key
        </button>

        <button 
          className='save-close'
          //onClick={}
          >
          Save & Close
        </button>
        
        <button className='close-btn' onClick={() => setKeyWindow(false)} >
          <img
          className='close-icon'
          draggable='false'
          src={require('../media/close-icon.png')}
          alt='X' />
        </button>
      </div>
    }
  </>
  )
}

export default KeyButton