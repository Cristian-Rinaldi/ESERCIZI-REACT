import { useEffect, useState } from "react";

const EsercizioUseState = () => {

const [formData, setFormData]=useState(
  {
    username:"",
    password:""
  }
)
const cambioValue= (field, value)=>{
  setFormData({...formData,[field]: value})
}
useEffect(()=>{
console.log("formData", formData

)
 }, [formData])

    return (
      <form
        style={{
          display: "flex",
          gap: "16px",
        }}
        onSubmit={(event)=>{
          event.preventDefault();
          console.log("dati del form", formData)
        }}
      >
        <input name="username" type="text" required placeholder="Username" onChange={(event)=> cambioValue("username", event.target.value)}/>
        <input name="password" type="password" required placeholder="Password"onChange={(event)=> cambioValue("password", event.target.value)} />
  
        <button type="submit">Accedi</button>
      </form>
    );
  };
  
  export default EsercizioUseState;
