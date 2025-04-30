/*
Argomenti: components, props, useState, useEffect, map, controlled form
Crea un'app con due componenti:
Un ContactForm che permetta di aggiungere nome e numero di telefono, usando un form controllato
Una ContactList che visualizzi i contatti sotto forma di lista.
I contatti devono essere salvati nello stato. Bonus: salva i contatti nel localStorage usando useEffect per mantenere i
dati dopo il refresh*/

import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";


function App(){
  const [contacts, setContacts]=useState( JSON.parse(localStorage.getItem("contacts")))

const addContacts= (newContacts)=>{
 setContacts((oldContacts)=>[ ...oldContacts, newContacts])
}
 
useEffect(() =>{

localStorage.setItem("contacts", JSON.stringify(contacts))

},[contacts])

useEffect(() =>{

const dati= JSON.parse(localStorage.getItem("contacts"))
setContacts(dati)

  
  },[])



    return(
      <>
    < ContactForm  dati={addContacts} />
    < ContactList  contacts={contacts} />
      </>
    )
}

export default App;
