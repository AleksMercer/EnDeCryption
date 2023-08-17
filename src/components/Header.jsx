import React from 'react'
import { useSelector } from 'react-redux'

import { selectMode, selectCopy } from '../store'

import InfoButton from './additional/InfoWindow'
import KeyButton from './additional/KeyWindow'


function Header() { /* Here i need to make info field with (modal window) */

  const modeState = useSelector(selectMode)
  const copyState = useSelector(selectCopy) 

  return (
    <header>

      <h1>
        { modeState 
          ? <span>EnC<span className='full-name'>ryption</span></span> 
          : <span>DeC<span className='full-name'>ryption</span></span> 
        }
      </h1>

      <div className='info-and-key'>

        <InfoButton />
        <KeyButton />

      </div>

      <div className={`copy-tip ${copyState && 'active'}`}>Copied!</div>
      
    </header>
  )
}

export default Header