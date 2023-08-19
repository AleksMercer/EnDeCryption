import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMode, selectContent, selectEncrypted } from '../../../store' // selectors import
import { keyTipSwap, changeContent, encryptionContent } from '../../../store' // reducers import

function Result() {

  const dispatch = useDispatch()
  const modeState = useSelector(selectMode) // boolean
  const contentState = useSelector(selectContent)
  const encryptedState = useSelector(selectEncrypted)

  let cookie = atob(document.cookie.slice(9)) // get cookie key

  //#region — EnDeC Algorithm

  const encoder = new TextEncoder() 
  const decoder = new TextDecoder()

  const encryption = async () => {
    try {
      const data = encoder.encode(contentState)

      const cryptoKey = await crypto.subtle.importKey (
        'raw',
        encoder.encode(cookie),
        { name: 'AES-CBC', length: 256 },
        false,
        ['encrypt']
      )
  
      const encryptedData = await crypto.subtle.encrypt (
        { name: 'AES-CBC', iv: new Uint8Array(16) },
        cryptoKey,
        data
      )
  
      const encryptedHex = Array
        .from(new Uint8Array(encryptedData))
        .map(byte => ('00' + byte.toString(16))
        .slice(-2))
        .join('')
  
      dispatch( encryptionContent( encryptedHex ))

    } catch (error) {
      dispatch(keyTipSwap())
      setTimeout(() => dispatch(keyTipSwap()), 1000);
    }
  }

  const decryption = async () => {
    try {
      const data = new Uint8Array(encryptedState
        .match(/.{1,2}/g)
        .map(byte => parseInt(byte, 16)))

      const cryptoKey = await crypto.subtle.importKey (
        'raw',
        encoder.encode(cookie),
        { name: 'AES-CBC', length: 256 },
        false,
        ['decrypt']
      )

      const decryptedData = await crypto.subtle.decrypt (
        { name: 'AES-CBC', iv: new Uint8Array(16) },
        cryptoKey,
        data
      )

      dispatch( changeContent( decoder.decode(decryptedData) ))
      
    } catch (error) {
      dispatch(keyTipSwap())
      setTimeout(() => dispatch(keyTipSwap()), 1000);
    }
  }
  //#endregion
  
  return (
    <button 
      className='result'
      onClick={modeState ? encryption : decryption}
    >
      Result
    </button>
  )
}

export default Result