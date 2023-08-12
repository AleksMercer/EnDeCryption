import React, { useState } from 'react'

function AlgorithmEDC() {
  
  const [originalText, setOriginalText] = useState('')
  const [secretKey, setSecretKey] = useState('')
  const [encryptedText, setEncryptedText] = useState('')
  const [decryptedText, setDecryptedText] = useState('')

  const encoder = new TextEncoder() 
  const decoder = new TextDecoder()

  const encryptText = async () => {

    const data = encoder.encode(originalText)

    const cryptoKey = await crypto.subtle.importKey (
      'raw',
      encoder.encode(secretKey),
      { name: 'AES-CBC', length: 256 },
      false,
      ['encrypt']
    )

    const encryptedData = await crypto.subtle.encrypt (
      { name: 'AES-CBC', iv: new Uint8Array(16) },
      cryptoKey,
      data
    )

    const encryptedHex = Array.from(new Uint8Array(encryptedData)).map(byte => ('00' + byte.toString(16)).slice(-2)).join('')

    setEncryptedText(encryptedHex)
  }

  const decryptText = async () => {

    const data = new Uint8Array(encryptedText.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))

    const cryptoKey = await crypto.subtle.importKey (
      'raw',
      encoder.encode(secretKey),
      { name: 'AES-CBC', length: 256 },
      false,
      ['decrypt']
    )

    const decryptedData = await crypto.subtle.decrypt (
      { name: 'AES-CBC', iv: new Uint8Array(16) },
      cryptoKey,
      data
    )

    setDecryptedText(decoder.decode(decryptedData))
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Введите текст для шифрования"
        value={originalText}
        onChange={e => setOriginalText(e.target.value)}
      />

      <input
        type="text"
        placeholder="Введите секретный ключ"
        value={secretKey}
        onChange={e => setSecretKey(e.target.value)}
      />

      <button onClick={encryptText}>Зашифровать</button>

      <button onClick={decryptText}>Расшифровать</button>

      <div>
        <strong>Зашифрованный текст:</strong> {encryptedText}
      </div>

      <div>
        <strong>Расшифрованный текст:</strong> {decryptedText}
      </div>

    </div>
  )
}

export default AlgorithmEDC
