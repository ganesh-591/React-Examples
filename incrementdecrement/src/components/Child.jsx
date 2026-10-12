import React from 'react'

const Child = ({count, counter}) => {
    const increment = ()=>{
        counter(count +1)
    }
    const decrement=()=>{
        counter(count-1)
    }
    const reset=()=>{
        counter(count*0)
    }
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Child
