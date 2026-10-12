import React, { useState } from 'react'
import Counter from './Component/Counter'
import Reset from './Component/Reset'

const App = () => {
  const[count,setCount]=useState(0)
  return (
    <div>
      <Counter count={count} setCount={setCount}/>
      <Reset setCount={setCount}/>
    </div>
  )
}

export default App
