/*ARGOMENTI       CONTROLLLED FORM    E   USE STATE
crea un componente con un campo di input e un bottone quando l'utente preme e scrive il bottone  il testo deve essere aggiunto sotto come elenco  
*/
import { useState } from "react";
const TerzoEsercizio = () => {
  const [testo, setTesto] = useState("");
  const [elenco, setElenco] = useState([]);

  const FunzioneCambio = (event) => {
    setTesto(event.target.value);
  };

  const FunzioneClick = () => {
    setElenco([...elenco, testo]);
    setTesto("");
  };

  return (
    <>
      <input type="text" onChange={FunzioneCambio} value={testo} />
      <button onClick={FunzioneClick}>clicca </button>

      <ul>
        {elenco.map((value, index) => {
          return <li key={index}> {value}</li>;
        })}
      </ul>
    </>
  );
};
export default TerzoEsercizio;
