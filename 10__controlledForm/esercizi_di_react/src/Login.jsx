/*
Crea un componente Login contenente tre input: un input per il nome utente, uno per la password e una casella di controllo "Ricorda". Tutti e tre gli input devono essere componenti controllati. Aggiungi un pulsante "Login" al componente Login. Questo pulsante deve essere disabilitato finché gli input per il nome utente e la password sono vuoti. Quando viene cliccato, il gestore eventi associato al pulsante deve chiamare un'istanza onLogin functionpassata come prop al componente Login, passandogli lo stato, che ne stamperà il valore.
Aggiungere un pulsante "reset" al componente Login che, se cliccato, cancella il contenuto di tutti e tre gli input. Utilizzare l'elemento form per gestire l'invio del form e collegare il gestore eventi handleLogin all'evento onSubmit dell'elemento form. Come si impedisce il comportamento predefinito dell'elemento form?*/


import { useState } from "react"
const Login = ({onLogin})=>{
const [nome,setNome]=useState("")
const [password,setPassword]=useState("")
const [checkbox,setCheckbox]=useState(false)


const reset = ()=>{
    setNome("")
setPassword("")
setCheckbox(false)
}

const handleSubmit = (event) => {
    event.preventDefault();
    const dati = {
      nome,
      password,
      checkbox
    };
    onLogin(dati); 
  };

  const disabilitato = nome === "" || password === "" ? "disabled" : null;

    return(
        <div>
    <form onSubmit={handleSubmit}>

<input type="text" placeholder="  digita nome" value={nome}  onChange={(event)=> setNome(event.target.value)}/>  <br />
<br />
<input type="password"  placeholder="  digita password" value={password}  onChange={(event)=> setPassword(event.target.value)}/> <br />
<br />

<input type="checkbox"  checked={checkbox}  onChange={(event)=> setCheckbox(event.target.checked)}/>
<label htmlFor="checkbox"> RICORDA</label>


<div>
<button onSubmit={onLogin}  disabled={disabilitato}> LOGIN </button>
</div>
<br />

<div>
<button  onClick={reset}> RESET</button>
</div>


</form>



        </div>
        



    )
}
export default Login 