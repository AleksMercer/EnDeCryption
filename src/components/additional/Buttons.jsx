import React from 'react'

function Buttons() {

  return (
    <>
    <button className='mode-swap'>
      Mode - Swap
    </button>

    <select className='modes'>
      <option value="first_mode">Mode 1</option>
      <option value="second_mode">Mode 2</option>
      <option value="third_mode">Mode 3</option>
    </select>

    <button className='get-result'>
      Result
    </button>

    </>
  )
}

export default Buttons