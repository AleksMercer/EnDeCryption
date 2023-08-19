import React from 'react'
import { useSelector } from 'react-redux'

import { selectMode, selectCopyTip, selectKeyTip } from '../store'

import InfoWindow from './additional/InfoWindow'
import KeyWindow from './additional/KeyWindow'


function Header() { /* Here i need to make info field with (modal window) */

  const modeState = useSelector(selectMode)
  const copyTipState = useSelector(selectCopyTip) 
  const keyTipState = useSelector(selectKeyTip)

  return (
    <header>

      <h1>
        { modeState 
          ? <span>EnC<span className='full-name'>ryption</span></span> 
          : <span>DeC<span className='full-name'>ryption</span></span> 
        }
      </h1>

      <div className='info-and-key'>

        <InfoWindow />
        <KeyWindow />

      </div>

      <div className={`copy-tip ${copyTipState && 'active'}`}>Copied!</div>
      <div className={`key-tip ${keyTipState && 'active'}`}>Wrong Key!</div>
      
    </header>
  )
}

export default Header