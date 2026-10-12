import React, { useState } from 'react'
import Timer from './Component/Timer'

const App = () => {
  const[show,setShow]=useState(false)

  return (
    <div>
      <button onClick={()=>setShow(!show)}>{show ? 'Stop':'Start'}</button>
      {show && <Timer />}
    </div>
  )
}

export default App
