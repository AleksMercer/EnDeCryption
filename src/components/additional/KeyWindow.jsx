import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import CopyButton from './buttons/CopyButton'

import { selectKey } from '../../store' // selectors import
import { generatedKey } from '../../store' // reducers import

function KeyButton() {

  const dispatch = useDispatch()
  
  const keyState = useSelector(selectKey)

  const [keyWindow, setKeyWindow] = useState(false)  

  const generateKey = () => {

    const randomBytes = new Uint8Array(32)
  
    crypto.getRandomValues(randomBytes)
    
    const keyHex = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('')
    
    const key32Chars = keyHex.slice(16, 48)

    dispatch(generatedKey(key32Chars))
  }

  const setCookie = () => {
    try {
      let keyBase64 = btoa(keyState)
      document.cookie = `EnDeCKey=${keyBase64}; path=/; max-age=604800; secure;`  
    } catch (error) {
      console.error(error)
    }
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
        
        <div className='container'>

          <span className={keyState.length < 32 ? 'red-span' : 'green-span'}>{keyState.length} / 32</span>

          <input
            className='key-input'
            type='text'
            name='key'
            maxLength='32'
            placeholder='Generate or type key'
            value={keyState}
            onChange={(e) => dispatch(generatedKey(e.target.value))}
          />

          <CopyButton window='key' />
          
        </div>

        <button 
          className='generate'
          onClick={generateKey}
          >
          Generate key
        </button>

        <button 
          className='save-close'
          onClick={() => {
            setKeyWindow(false)
            setCookie()
          }}
        >
          Save & Close
        </button>
        
      </div>
    }
  </>
  )
}

export default KeyButton