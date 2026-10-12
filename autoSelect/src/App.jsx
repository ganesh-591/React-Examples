import React, { useEffect, useRef } from 'react'

const App = () => {
  const intRef = useRef();
  
  useEffect(()=>{
    intRef.current.focus()
  })
  return (
    <div>
      <input ref={intRef} placeholder='Auto Focus'/>
    </div>
  )
}

export default App
