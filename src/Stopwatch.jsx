import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

    const [data, setData]= useState(0);
    const [flag, isrunning]= useState(false);
    const formatTime=(seconds) =>{
        const minutes= Math.floor(seconds/60);
        const remainingSeconds= seconds%60;
        return `${minutes}:${remainingSeconds<10 ? "0": ""}${remainingSeconds} `
    }

    const handleStart=()=>{
        isrunning(!flag);
    }
    useEffect(()=>{
        let interid;
        if(flag){
        interid= setInterval (()=>{
        setData((prev)=>prev+1)
        }, 1000) 
        }
        else {
            clearInterval(interid)
        }
        return ()=> clearInterval(interid) 

    },[flag])

    const handleReset=()=>{
        isrunning(false)
        setData(0);

    }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(data)}</p>
      <button onClick={handleStart}>{flag ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
