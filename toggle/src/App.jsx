// import React, { useState } from 'react'

// const App = () => {
//   const [show,setShow]=useState(false)
//   const handle=()=>{
//     setShow(!show);
//   }

//   return (
//     <div>
//      <button onClick={handle}>{show ? "hide":"show"}</button> 
//      {show && <p>This is private Message</p>}
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {
  const [show, setShow]=useState(false)
  return (
    <div>
      <button onClick={()=>setShow(!show)}>{show ? "hide":"show"}</button>
      {show && <p>This is Secret Message! </p>}
      
    </div>
  )
}

export default App
