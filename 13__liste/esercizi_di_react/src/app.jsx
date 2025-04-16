/*Crea un componente denominato Color che riceve un oggetto denominato color come prop, il quale avrà 2 proprietà, id e name, e restituisce un tag li che visualizza la proprietà name.
Crea un secondo componente denominato Colori, che accetta un array di oggetti come prop, in cui le proprietà sono sempre nome e id, e visualizza un elenco non ordinato di componenti Colore.*/
import Colori from "./Colori"
import Color from "./Color"

 
 const App = ()=>{
  const listaColori = [
    { id: "2", name: "rosso" },
    { id: "3", name: "nero" },
    { id: "4", name: "blue" },
    { id: "5", name: "giallo" },
  ];


  return (
    <>
    < Color color={{id:1 ,name:"cristian"}} />
    < Colori colori={listaColori}  />

    
    </>

  )
}
export default App 