/*ARGOMENTI       MAP E PROPS
crea una componente NameList che riceva via props un array di nomi e visualizzi ciascun nome come elemento di una lista
*/

import NameList from "./NameList";

function App(){
  const listaNomi = ["cristian", "silvia", "monica", "alfonso", "morena", "mattia", "niccolò"];


    return(
      <>
     < NameList nomi={listaNomi} />
      </>
    )
}

export default App;
