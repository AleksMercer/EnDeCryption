import React, { useState } from 'react'


function InfoButton() {

  const [infoWindow, setInfoWindow] = useState(false)  

  return (
  <>
    <button className='info-btn' onClick={() => setInfoWindow(true)} disabled>
      <img
      className='info-icon'
      draggable='false'
      src={require('../media/info-icon.png')}
      alt='?' />
    </button>

    { infoWindow &&
      <div className='info-window'>
        Info window
        
        <button className='close-btn' onClick={() => setInfoWindow(false)} >
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

export default InfoButton