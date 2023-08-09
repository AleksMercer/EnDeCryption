import React from 'react'

import ModeSwap from './additional/buttons/ModeSwap'
import Result from './additional/buttons/Result'
import LeftWindow from './additional/LeftWindow'
import RightWindow from './additional/RightWindow'

function Main() {
  
  return (
    <main>

      <div className='windows'>

        <LeftWindow />
        
        <ModeSwap />

        <RightWindow />

      </div>

      <Result />
      
    </main>
  )
}

export default Main 