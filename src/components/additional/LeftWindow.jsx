import React from 'react'

function LeftWindow() {
  return (
    <textarea
      className='windows_left'
      placeholder="Type something for DeCryption"
      name="content"
      // ref={textAreaRef}
      // value={content}
      // onChange={ (e) => setContent(e.target.value) }
      // onBlur={blur}
      // onFocus={handleFocus}
      maxLength={2000}
      autoFocus
    />
  )
}

export default LeftWindow