import { useState } from "react"

export const useCounter=()=>{

 const[counter,setCounter]=useState(0)

const incrementa =()=>{
    setCounter((counter)=> counter + 1)
}

const decrementa =()=>{
    setCounter((counter)=> counter - 1)
}


const reset =()=>{
    setCounter(0)
}


    return {counter,incrementa,decrementa,reset}
}