import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[sec,setSec]=useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSec((prev)=>prev+1)
        },1000)

        return()=>{
            clearInterval(timer);
        }
    },[])
  return (
    <div>
      {sec}
    </div>
  )
}

export default Timer
