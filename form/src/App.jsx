import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formdata,setFormdata]=useState({
    name:"",
    mail:"",
    password:"",
  })
  const [submitform,setSubmitform]=useState(null)
  
  function handlechange(e){
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value,
    })
  }
    function hover(e){
      e.preventDefault()
      setSubmitform(formdata)

      setFormdata({
    name:"",
    mail:"",
    password:"",
  })
  }

  return (
    <div>
      <form onSubmit={hover}>
        <input type="text" 
        placeholder='Enter Name..'
        onChange={handlechange}
        name="name"
        value={formdata.name}
        required/>
        <input type="email"
        placeholder='Enter Email'
        onChange={handlechange}
        value={formdata.mail}
        name="mail"
        required />
        <input type="password"
        placeholder='Enter Password'
        onChange={handlechange}
        value={formdata.password}
        name="password"
        required />
        <button type="submit">submit</button>
        
        </form>
        {submitform && (<>
        <h1>Form Submited!</h1>
        <h3>name:{submitform.name}</h3>
        <h3>email:{submitform.mail}</h3>
        <h3>password:{submitform.password}</h3>
        </>)

        }
      
    </div>
  )
}

export default App
