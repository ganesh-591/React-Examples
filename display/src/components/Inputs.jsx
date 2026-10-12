import React from 'react'

const Inputs = ({name,setName}) => {
  return (
    <div>
      <input type="text" placeholder='Enter Name..' onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Inputs
