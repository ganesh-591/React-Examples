import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text, setText]= useState("")
  return (
    <div>
      <input type="text" 

      placeholder='Enter the Name...!' 
      onChange={(e)=>setText(e.target.value)}/>
      <h2>{text}</h2>
    </div>
  )
}

export default App
