import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  } from '../../store'

function Result() {

  //const count = useSelector((state) => state.counter.value)
  // const count = useSelector((state) => state.counter.value)
  //const dispatch = useDispatch()

  return (
    <button className='result' >
      Result
    </button>
    /*<button className='result' onClick={() => dispatch(incrementByAmount(15))}>
      {count}
    </button>*/
  )
}

export default Result