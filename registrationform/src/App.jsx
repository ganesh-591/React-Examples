import React, { useState } from 'react'

const App = () => {
  const [mail,setMail]=useState("")
  const [pass,setPass]=useState("")

  const [submitmail,setSubmitmail]=useState("")
  const [password,setPassword]=useState("")
  
  function hover(e){
    e.preventDefault()

    setSubmitmail(mail)
    setPassword(pass)
  }

  return (
    <div>
      <form onSubmit={hover}>
        <input type="email" 
        placeholder='Enter the Mail..'
        onChange={(e)=>setMail(e.target.value)}
        required/>
        <input type="password" 
        placeholder='Enter Password...'
        onChange={(e)=>setPass(e.target.value)}
        required/>
        <button type='submit'>submit</button>
      </form>
      <div>
        {submitmail &&( <>
          <h2>{submitmail}</h2>
          <h2>{password}</h2>
        </>
        )}
      </div>
    </div>
  )
}

export default App
