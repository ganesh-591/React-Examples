import React, { useState } from 'react'

const App = () => {
  const [password, setPassword]=useState(false)

  return (
    <div>
      <input type={password ? "text" : "password"} placeholder='Enter the Password'/>
      <button onClick={()=>setPassword(!password)}>{password ?"hide":"show"}</button>
    </div>
  )
}

export default App
