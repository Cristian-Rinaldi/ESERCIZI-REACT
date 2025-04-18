/*ARGOMENTI       USE EFFECT     MAP 
Crea un componente che faccia fetch da https://jsonplaceholder.typicode.com/users al montaggio e mostri i nomi in una lista  
*/
import { useState,useEffect } from "react"
const ComponenteFetch= ()=>{
const[nomi,setNomi]=useState([])

useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((dati) => setNomi(dati))
},[])





    return(
        <>
        <ul>
        {nomi.map((value,index)=>{
            return <li key={index}> {value.name}</li>
        })}
        </ul>
        
        </>
    )
}
export default ComponenteFetch