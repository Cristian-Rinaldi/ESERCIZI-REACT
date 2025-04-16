/*Crea un componente denominato Color che riceve un oggetto denominato color come prop, il quale avrà 2 proprietà, id e name, e restituisce un tag li che visualizza la proprietà name.
Crea un secondo componente denominato Colori, che accetta un array di oggetti come prop, in cui le proprietà sono sempre nome e id, e visualizza un elenco non ordinato di componenti Colore.*/

import Color from "./Color";

const Colori = ({ colori }) => {
  return (
   
    <div className="ml-10">
    {colori.map((value) => (
        <Color key={value.id} color={value} />
      ))}
        
    </div>
      
    
  
  );
};

export default Colori;
