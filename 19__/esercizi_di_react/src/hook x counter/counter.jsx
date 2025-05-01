import { useCounter } from "./useCounter";

const Counter = () => {
  const { counter, incrementa, decrementa, reset } = useCounter();

  return (
    <div className="container">
      <p>{counter}</p>

      <div>
        <button onClick={incrementa}> AUMENTA DI 1 </button>
      </div>
      <div>
        <button onClick={decrementa}>DECREMENTA DI 1 </button>
      </div>

      <div>
        <button onClick={reset}>RESET </button>
      </div>
    </div>
  );
};

export default Counter;

/*
1) importiamo react il componente counterDelay 
import { useState } from "react"
import CounterDelay from "./counterDisplay";
import "./style.css"


2) creaiamo il componente Counter sottoforma di constante gli passiamo la props perche ci servirà per prendere il valore di partenza 
const Counter= (props)=>{


3) poi facciamo una destrutturizzazione di array perche UseState ci ritorna sempre un array che come primo argomento vuole uno stato cioè in questo caso il contatore e poi come secondo argomento vuole una funzione che ci permette di aggiornare lo stato della variabile         const [contatore, setContatore]=useState(props.start); 

nell'app.jsx abbiamo dichiarato la chiave start={0}

ci dichiariamo una constante reset che avrà come valore la props con il numero iniziale del contatore  
 const reset=props.start

 abbiamo creato una constante intestazione e dentro ocme valore gli abbiamo dato  come valore una funzione v





*/
