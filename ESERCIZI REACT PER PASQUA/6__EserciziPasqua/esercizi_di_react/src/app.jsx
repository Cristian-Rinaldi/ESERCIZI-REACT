/*
Argomenti: components, props, useState, useEffect, map, controlled form
Crea un'app con due componenti:
Un ContactForm che permetta di aggiungere nome e numero di telefono, usando un form controllato
Una ContactList che visualizzi i contatti sotto forma di lista.
I contatti devono essere salvati nello stato. Bonus: salva i contatti nel localStorage usando useEffect per mantenere i
dati dopo il refresh*/

import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import { useState } from "react";


function App(){
  const [contacts, setContacts]=useState([])

const addContacts= (newContacts)=>{
 setContacts((oldContacts)=>[ ...oldContacts, newContacts])
}
  
    return(
      <>
    < ContactForm  dati={addContacts} />
    < ContactList  contacts={contacts} />
      </>
    )
}

export default App;
