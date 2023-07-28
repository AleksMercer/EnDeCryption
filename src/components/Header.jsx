import React from 'react'
import { useSelector } from 'react-redux'

import { selectMode } from '../store'


function Header() {

  const modeState = useSelector(selectMode)

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

      { modeState ?
        <h1 className=''>EnCryption</h1>
        :
        <h1 className=''>DeCryption</h1>
      }
      
    </header>
  )
}

export default Header