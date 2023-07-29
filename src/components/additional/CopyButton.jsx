import React from 'react'
import { useSelector } from 'react-redux'


import { selectContent } from '../../store' // selectors import

function CopyButton() {

  const contentState = useSelector(selectContent)

  const contentCopy = async () => {
    await navigator.clipboard.writeText(contentState)
  }

  return (
    <button className='copy_btn'>
      <img 
        className='copy-icon' 
        draggable='false'
        src={require('../media/copy-icon.png')} 
        alt='+' 
        onClick={contentCopy}
        />
    </button>
  )
}

export default CopyButton