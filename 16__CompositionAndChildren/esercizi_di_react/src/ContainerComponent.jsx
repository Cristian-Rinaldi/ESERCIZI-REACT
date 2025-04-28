/*Crea un Containercomponente che esegua il rendering dei suoi elementi figlio all'interno di un div tag.
Usate un div tag con uno sfondo bianco e un bordo rosso.
Aggiungere un title propelemento che conterrà il valore del titolo da visualizzare prima degli elementi figlio.
Rendi comprimibile il contenitore, in modo che quando si clicca sul titolo gli elementi secondari vengano nascosti o nuovamente mostrati.
Utilizzare il useStategancio per tenere traccia dello stato compresso.*/
import { useState } from "react";
import "./style.css"
const ContainerComponents=({children,title})=>{
const[toggle,setToggle]= useState(false)

const handleClick= ()=>{
    setToggle(!toggle);
}

return (
<div>

    <h1 onClick={handleClick}>{title}</h1>
    {!toggle && children}
   
</div>

);


}
export default ContainerComponents 