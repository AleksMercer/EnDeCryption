import React from 'react'

function Header() {

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

      <h1>DeCryption</h1>
    </header>
  )
}

export default Header