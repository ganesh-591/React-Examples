import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const[name1,setName1]=useState('')
  const[name2,setName2]=useState('')

  const prev = useRef("")
  useEffect(()=>{
    prev.current = name2
  },[name2])
  
  function add(){
    setName2(name1)
  }

  return (
    <div>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setName1(e.target.value)}/>
      <button onClick={add}>Click</button>
      <h3>Current Name:{name2}</h3>
      <h4>Previos Name:{prev.current}</h4>
    </div>
  )
}

export default App
