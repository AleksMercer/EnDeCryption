import React, { useState } from 'react'

function ModeSwap() {
  const [isRotate, setIsRotate] = useState(true);

  return (
    <button className='mode-swap'>
       <img 
        className={`swap-icon ${isRotate ? 'rotate' : 'unrotate'}`}
        draggable='false'
        onMouseUp={() => setIsRotate(!isRotate)} 
        src={require('../media/swap-icon.png')} alt='—><—' 
       />
    </button>
  )
}

export default ModeSwap