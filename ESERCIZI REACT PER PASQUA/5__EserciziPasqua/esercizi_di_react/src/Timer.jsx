/*
                        ARGOMENTI       USE STATE     E   USE EFFECT
Crea un componente che mostri un timer che aumenta di 1 ogni secondo. Aggiungi due bottoni per fermare e riprendere
il timer
*/

import { useEffect } from "react"
import { useState } from "react"

const Timer=()=>{
    const [time,setTime]=useState(0)
    const [attivo,setAttivo]=useState(false)

    useEffect(() => {
        if (!attivo) return;
      
        const interval = setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000);
      
        return () => clearInterval(interval);
      }, [attivo]);
      

const start = ()=>{
    setAttivo(true)
}
const stop = ()=>{
    setAttivo(false)
}
const reset = ()=>{
    setTime(0)
}

    return (
       <>
            <div  style={{display: "flex", justifyContent: "center", width: "200px"}}>
         <p>{time}</p>
        </div>

        <div style={{display: "flex", gap: "10px"}} >
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <button onClick={reset}>RESET</button>
        </div>
       
       </>

    )
}

export default Timer;