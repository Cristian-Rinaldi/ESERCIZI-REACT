/*
Crea un file index.css e importalo nel file index.jsx.
Aggiungere una classe .welcome al componente Welcome che imposta il colore di sfondo e aggiunge un bordo.
Modificare il componente CounterDisplay aggiungendo un attributo di stile in linea, modificando la dimensione e il colore del carattere.
Modificare il componente Login in modo che il colore di sfondo del pulsante "Login" sia "rosso" quando la lunghezza della password immessa è inferiore a 8 caratteri, verde negli altri casi.
*/ 



import React from "react";
import Welcome from "./Welcome";
import CounterDisplay from "./CounterDisplay";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Welcome />
      <CounterDisplay count={5} />
      <Login />
    </div>
  );
};

export default App;