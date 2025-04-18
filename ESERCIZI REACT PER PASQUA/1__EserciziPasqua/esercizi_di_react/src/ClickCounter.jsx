/*   ARGOMENTI  COMPONENTS E USE STATE
crea una componente ClickCounter che  visualizzi un numero e un bottone  al click sul bottone il numero  deve aumentare di uno */ 
import { useState } from "react"

const ClickCounter = () => {

const [count,setCount]= useState(0)

const incremento = ()=>{
    setCount(count + 1 )
}
    return (
        <>
        <p> {count} </p>

        <button onClick={incremento}>incrementa</button>
        </>
    )
}

export default ClickCounter