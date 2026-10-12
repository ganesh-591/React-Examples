import React from 'react'
import "./Child.css"


const Child = (prop) => {
  return (
    <div className='main'>
      <div >
        <img src={prop.pizza} alt="" />
        <h2>{prop.a}</h2>
        <h3>price:{prop.a1}</h3>
        <button>onclick</button>
      </div>
      <div >
        <img src={prop.burger} alt="" />
        <h2>{prop.b}</h2>
        <h3>{prop.b2}</h3>
        <button>onclick</button>
      </div>
      <div>
        <img src={prop.fries} alt="" />
        <h2>{prop.c}</h2>
        <h3>{prop.c3}</h3>
        <button>onclick</button>
      </div>
      
    </div>
  )
}

export default Child
