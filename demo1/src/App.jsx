import React from 'react'
import { useState } from 'react'
import Timer from './Components/Timer';

const App = () => {
  const[show,setShow]=useState(false);


  return (
    <div>
      <button onClick={()=>setShow(!show)}>{show ? "Stop":"Start"}</button>
      {show && <Timer />}
    </div>
  )
}

export default App
