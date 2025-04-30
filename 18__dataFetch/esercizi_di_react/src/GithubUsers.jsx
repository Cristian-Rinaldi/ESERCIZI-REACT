/*
Crea un componente GithubUser che riceva una prop username e recuperi i dati dell'utente Github corrispondente dall'API Github. 
Il componente dovrebbe visualizzare il nome utente, il login e l'avatar dell'utente.
Crea un nuovo componente GithubUsers con un modulo con un campo di testo e un pulsante di invio.
 Il campo di testo verrà utilizzato per cercare un utente specificandone il nome utente. 
 Ogni utente verrà visualizzato in un elenco, in cui ogni elemento dell'elenco è un componente GithubUser. 
 Questi componenti utilizzeranno il nome utente come prop.
 */

import { useState } from "react"
import GithubUser from "./GithubUser";

const GithubUsers =()=>{

    const [username,setUsername]=useState("")
    const [lista,setLista]=useState([])



const handleSubmit=(event)=>{
event.preventDefault();
setLista([...lista,username])
setUsername("")

}

    return(
        <>
        <form onSubmit={handleSubmit}>

<input type="text" onChange={(event)=> setUsername(event.target.value)} value={username} />
<button type="submit">invia </button>
</form>
<ul>
{lista.map((user,index)=> {
    return <li key={index}> <GithubUser username={user} /> </li>
})}
</ul>
        </>


    )
}
export default GithubUsers