/*
Crea un componente GithubUser che riceva una prop username e recuperi i dati dell'utente Github corrispondente dall'API Github. 
Il componente dovrebbe visualizzare il nome utente, il login e l'avatar dell'utente.
Crea un nuovo componente GithubUsers con un modulo con un campo di testo e un pulsante di invio.
 Il campo di testo verrà utilizzato per cercare un utente specificandone il nome utente. 
 Ogni utente verrà visualizzato in un elenco, in cui ogni elemento dell'elenco è un componente GithubUser. 
 Questi componenti utilizzeranno il nome utente come prop.
 */

import { useEffect,useState } from "react";


const GithubUser =({username})=>{

    const [user,setUser]=useState(null);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=> response.json())
        .then((data)=> setUser(data) )
        .catch((error)=> console.error(error))
    },[username])

    if (!user) {
        return <p>Caricamento...</p>; 
      }

    return(
<div>

<img src={user.avatar_url} alt="" />
<p>{user.login}</p>
<p>{user.name}</p>


</div>
    );
}
export default GithubUser