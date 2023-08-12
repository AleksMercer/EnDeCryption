import React, { useState } from 'react'

function KeyButton() {

  const [keyWindow, setKeyWindow] = useState(false)  
  const [key, setKey] = useState('')  

  const generateKey = () => {

    const randomBytes = new Uint8Array(32)
  
    crypto.getRandomValues(randomBytes)
    
    const keyHex = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('')
    
    const key32Chars = keyHex.slice(16, 48)
    
    setKey(key32Chars) 
  }

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
        
        <input 
          className='key-input' 
          type='text' 
          name='key'
          id='1'
          maxLength='32'
          placeholder='Generate key'
          value={key}
          disabled
        />

        <button 
          className='generate'
          onClick={generateKey}
          >
          Generate key
        </button>

        <button 
          className='save-close'
          onClick={() => setKeyWindow(false)}
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