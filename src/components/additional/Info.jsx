import React from 'react'

function Info() {
  return (
    // onClick={() => setInfoWindow(true)}
    <button className='info-btn' >  
      <img className='icons' src={require("../media/info-icon.png")} alt="?" />
    </button>
  )
}

export default Info