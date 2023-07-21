import React from 'react'

function RightWindow() {
  return (
    <textarea
      className='windows_right'
      placeholder="DeCryption result"
      name="content"
      // ref={textAreaRef}
      // value={content}
      // onChange={ (e) => setContent(e.target.value) }
      // onBlur={blur}
      // onFocus={handleFocus}
      disabled
    />
  )
}

export default RightWindow