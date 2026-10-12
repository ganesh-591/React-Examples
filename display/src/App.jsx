import React from 'react'
import { useState } from 'react'
import Display from './Components/Display'
import Inputs from './Components/Inputs'

const App = () => {
  const[name,setName]=useState('')
  return (
    <div>
       <Inputs name={name} setName={setName}/>
      <Display name={name}/>
    </div>
  )
}

export default App
