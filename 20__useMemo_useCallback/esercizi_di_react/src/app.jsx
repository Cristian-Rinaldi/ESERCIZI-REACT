

import { useCounter } from "./useCounter"; 

function App() {

  const persone = [
    { id: 1, nome: "Marco", età: 17 },
    { id: 2, nome: "Lucia", età: 22 },
    { id: 3, nome: "Giulia", età: 19 },
    { id: 4, nome: "Luca", età: 16 },
  ];

  
  const { count, increment, decrement, reset } = useCounter(0); 

  return (
    <>
    
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>
    </div>

<div>
<h1>Elenco completo:</h1>
<FilteredList items={persone} />
</div>
    </>
 
  );

}

export default App;
