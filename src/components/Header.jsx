import React from 'react'
import { useSelector } from 'react-redux'

import { selectMode,selectCopy } from '../store'


function Header() { /* Here i need to make info field with (modal window) */

  const modeState = useSelector(selectMode)
  const copyState = useSelector(selectCopy) 

  return (
    <header>

      <h1>
        { modeState ? 'EnCryption' : 'DeCryption' }
      </h1>

      <button className='info-btn' >  
        <img 
          className='info-icon'
          draggable='false'
          src={require('./media/info-icon.png')} 
          alt='?' />
      </button>

      <div className={`copy-tip ${copyState && 'active'}`}>
        Copied!
      </div>
      
    </header>
  )
}

export default Header