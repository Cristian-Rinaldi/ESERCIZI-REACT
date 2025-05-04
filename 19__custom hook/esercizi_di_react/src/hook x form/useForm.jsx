/*Crea un hook personalizzato che tenga traccia dello stato di un modulo controllato con gli input di nome utente e password e restituisca il valore corrente degli input nonché un gestore eventi per aggiornare entrambi gli input.*/

import { useState } from "react";

export const useForm = () => {
  // Stato per tenere traccia dei dati del form
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  

const handleSubmit=(e)=>{
e.preventDefault()

}

const handleChange=(e)=>{
const {name,value}=e.target
setFormData((prev)=> ({...prev,[name]:value  }))

}


    return {formData ,handleSubmit,handleChange} 
}
