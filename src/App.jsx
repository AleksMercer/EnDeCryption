import './style/style.css';
import React, { useState } from "react";

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => setIsLoading(false), 1000)
  
  return (
    <>
      { isLoading && 
      <div className='loadscreen'>
        <div className='loading-effect'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> }

      <Header />
    
      <Main />

      <Footer />
    </>
  )
}

export default App;
