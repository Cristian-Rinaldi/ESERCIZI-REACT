/*
Argomenti: components, props, useState, useEffect, map, controlled form
Crea un'app con due componenti:
Un ContactForm che permetta di aggiungere nome e numero di telefono, usando un form controllato
Una ContactList che visualizzi i contatti sotto forma di lista.
I contatti devono essere salvati nello stato. Bonus: salva i contatti nel localStorage usando useEffect per mantenere i
dati dopo il refresh*/

import { useState } from "react"
const ContactForm= ({dati}) => {

const [name,setName]=useState("")
const [number,setNumber]=useState("")







const handleSubmit= (event)=>{
event.preventDefault();

dati({name,number})

  setName("")
  setNumber("")
}

    
    return (
        <>
    <form onSubmit={handleSubmit}>

    <input type="text" name="name" onChange={(event)=> setName(event.target.value)  } value={name}/>
    <input type="number" onChange={(event)=> setNumber(event.target.value ) }  value={number} />
    <button type="submit" >   invia   </button>
    </form>
        



        </>
    )
}

export default ContactForm