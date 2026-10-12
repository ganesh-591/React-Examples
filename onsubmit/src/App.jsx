import React, { useState } from 'react'

const App = () => {
  const [name ,setName]=useState("");
  const [print,setPrint]=useState("")

  function hover(event){
    event.preventDefault()
    setPrint(name)
  }

  function typing(event){
    setName(event.target.value)

  }

  return (
    <div>
      <form onSubmit={hover}>
        <input type="text" placeholder='Enter name'
        onChange={typing} />    
        <button type='submit'>submit</button>    
        </form>  
        <h2>{print}</h2>  
    </div>
  )
}

export default App
