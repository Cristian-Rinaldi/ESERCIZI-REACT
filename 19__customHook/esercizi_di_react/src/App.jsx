/*Crea un hook personalizzato useCounter che tenga traccia dello stato di un contatore e restituisca il valore corrente del contatore, nonché tre funzioni per incrementare, decrementare e reimpostare il contatore.

Crea un hook personalizzato che tenga traccia dello stato di un modulo controllato con gli input di nome utente e password e restituisca il valore corrente degli input nonché un gestore eventi per aggiornare entrambi gli input.

Crea un hook personalizzato chiamato useGithubUser che riceve un nome utente, recupera i dati dell'utente Github corrispondente dall'API Github e restituisce utente, errore, caricamento e la funzione per recuperare i dati

Scrivere il gancio personalizzato useCurrentLocation, che utilizza l'API navigator.geolocation del browser per ottenere la posizione attuale dell'utente tramite il metodo incorporato getCurrentPosition. Il gancio deve restituire la posizione attuale e una funzione per ottenere la posizione attuale, nonché gli stati di errore e di caricamento. I dettagli su come utilizzare questa API sono disponibili qui: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API */

import Counter from "./hook x counter/counter";
import Form from "./hook x form/Form";



function App() {
  return (
<div style={{display:"flex",gap:"50px",flexDirection:"column"}}>
<Counter />
<Form />



</div>
  )
}

export default App;