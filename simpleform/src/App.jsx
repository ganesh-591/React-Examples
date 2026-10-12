import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState("")
  const [name1,setName1]=useState("")
  const [mail,setMail]=useState("")
  const [mail1,setMail1]=useState("")
  const [password,setPassword]=useState(false)
  const [pass,setPass]=useState("")
  
  function hover(event){
    event.preventDefault()
    setName1(name)
    setMail1(mail)
    setPass(password)
  }
  function naming(event){
    setName(event.target.value)
  }
  function mailing(event){
      setMail(event.target.value)
    }
  function passw(event){
      setPassword(event.target.value)
    }


  return (
    <div>
      <form onSubmit={hover}>
        <input type="text" placeholder='Enter name' onChange={naming}/>
        <input type="text" placeholder='Enter Mail' onChange={mailing}/>
        <input type="password" placeholder='Enter Password' onChange={passw}/>
      <button type='submit'>submit</button>
      </form>
      <h2>{name1}</h2>
      <h2>{mail1}</h2>
      <h2>{pass}</h2>
    </div>
  )
}

export default App
