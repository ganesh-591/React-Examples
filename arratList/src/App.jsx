import React, { useState } from 'react'

const App = () => {
  const[items,setItems]=useState(['Apple','Banana']);
  const[input,setInput]=useState('');
  function Add(){
    setItems([...items,input]);
    setInput('');
  }
  const Remove =(index)=>{
    const newArray=[...items]
    newArray.splice(index,1);
    setItems(newArray);
  }

  return (
    <div>
      {
        items.map((item,index)=>(
          <div key={index}>
            <h2>{item}</h2>
            <button onClick={()=>Remove(index)}>Remove</button>
          </div>
        ))
      }
      <input type='text' value={input} placeholder='Enter Item' onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={Add}>Add</button>
    </div>
  )
}

export default App
