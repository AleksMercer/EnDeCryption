import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { modeSwap } from '../../store'


function ModeSwap() {

  const dispatch = useDispatch()
  const swapValue = useSelector(state => state.store.mode)

  const [isRotate, setIsRotate] = useState(true)

  useEffect( () => { 

    const body = document.body.classList

    if (body.contains('encryption')) {

      body.remove('encryption')
      body.add('decryption')

    } else if (body.contains('decryption')) {

      body.remove('decryption')
      body.add('encryption')
    }
  }, [swapValue])

  return (
    <button className='mode-swap'>
       <img 
        className={`swap-icon ${isRotate ? 'rotate' : 'unrotate'}`}
        src={require('../media/swap-icon.png')} alt='—><—' 
        draggable='false'

        onMouseUp={() => setIsRotate(!isRotate)} 
        onClick={() => dispatch(modeSwap())}
       />
    </button>
  )
}

export default ModeSwap