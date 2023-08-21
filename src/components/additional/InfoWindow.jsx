import React, { useState, useEffect } from 'react'


function InfoButton() {

  const [infoWindow, setInfoWindow] = useState(false)  

  useEffect(() => {
    const visited = localStorage.getItem('visited')

    if (!visited) {
      setInfoWindow(true)
      localStorage.setItem('visited', 'true')
    }
  }, [])

  return (
    <>
      <button className='info-btn' onClick={() => setInfoWindow(true)} >
        <img
        className='info-icon'
        draggable='false'
        src={require('../media/info-icon.png')}
        alt='?' />
      </button>

      { infoWindow &&
        <div className='info-window'>
          
          <div className='info-container'>

            <div className='general-guide'>
              <h2>General Info</h2>
              <p className='description'>This app/site is designed to encrypt and decrypt text using the AES algorithm.</p>

              <div className='interface'>
                <h3>Briefly about the interface:</h3>
                <p><img src={require('../media/info-icon.png')} alt=''  /><span>- will open the information window you currently have open.</span></p>
                <p><img src={require('../media/key-icon.png')} alt=''   /><span>- opens a window for specifying the key.</span></p>
                <p><img src={require('../media/swap-icon.png')} alt=''  /><span>- change the mode from Encrypt to Decrypt, and vice versa.</span></p>
                <p><img src={require('../media/copy-icon.png')} alt=''  /><span>- copy the entry to the clipboard.</span></p>
                <p><img src={require('../media/clean-icon.png')} alt='' /><span>- clears the entry field.</span></p>
                <p><img src={require('../media/close-icon.png')} alt='' /><span>- closes the window.</span></p>
              </div>

              <div className='key'>
                <h3>About key:</h3>
                <p>1. The <span>key</span> is the 'password' for decrypting and encrypting the text, so it must be <span>kept in a safe place</span> otherwise you will not be able to decrypt the text encrypted with this key.</p>
                <p>2. The length of the key is <span>32 characters</span> (including spaces).</p>
                <p>3. If you want to make up your own key, it is desirable to use the following characters: <span>english alphabet</span> / <span>numbers</span> / <span>~.,!?:;@#$%^&*-_=+{}()[]/\''`</span>. Other characters may cause a 'Wrong Key!' error.</p>
                <p>4. The specified <span>key will be stored</span> in the application/site for <span>7 days</span>, after which you will need to re-enter it (the key will also be deleted if you clear cookies or save a new key).</p>
              </div>

            </div>

            <div className='encryption-guide'>
              <h2>Guide for Encryption</h2>
                <h3>Step 1</h3>
                  <p>- Open the window for specifying the key. In this window you can either make up your own key (see the 'About Key' section for rules) or use key generation.</p>
                
                <h3>Step 2</h3>
                  <p>- After creating the key, save it by clicking on the 'Save & Close' button.</p>

                <h3>Step 3</h3>
                  <p>- Now you can write text in the left window and by clicking on the 'Result' button in the right window you will see your text encrypted.</p>

                <h3 className='wrong'>Possible causes of the 'Wrong Key!' error:</h3>
                  <p>1. Your key does not match the required length.</p>
                  <p>2. Your key uses invalid characters.</p>
            </div>

            <div className='decryption-guide'>
              <h2>Guide for Decryption</h2>
                <h3>Step 1</h3>
                  <p>- Open the window for specifying the key. In this window specify an existing key for decryption.</p>

                <h3>Step 2</h3>
                  <p>- After specifying the key, save it by clicking the 'Save & Close' button.</p>

                <h3>Step 3</h3>
                  <p>- Now you can add the encrypted text to the left window and by clicking the 'Result' button, you will see the decrypted text in the right window.</p>

                <h3 className='wrong'>Possible causes of the 'Wrong Key!' error:</h3>
                  <p>1. If the key is wrong, the text will not be decrypted.</p>
            </div>

          </div>

          <button className='close-btn' onClick={() => setInfoWindow(false)} >
            <img
            className='close-icon'
            draggable='false'
            src={require('../media/close-icon.png')}
            alt='X' />
          </button>

        </div>
      }
    </>
  )
}

export default InfoButton