import React from 'react'

import ModeSwap from './additional/ModeSwap'
import LeftWindow from './additional/LeftWindow'
import RightWindow from './additional/RightWindow'
import Result from './additional/Result'

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