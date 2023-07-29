import React from 'react'
import { useSelector } from 'react-redux'

import { selectMode } from '../store'


function Header() { /* Here i need to make info field with (modal window) */

  const modeState = useSelector(selectMode) //boolean

  return (
    <header>
     {/* onClick={() => setInfoWindow(true)} */}
      <button className='info-btn' >  
        <img 
          className='info-icon'
          draggable='false'
          src={require('./media/info-icon.png')} 
          alt='?' />
      </button>

      <h1>
        { modeState ? 'EnCryption' : 'DeCryption' }
      </h1>
      
    </header>
  )
}

export default Header