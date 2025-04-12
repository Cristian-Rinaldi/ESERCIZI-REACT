import React, { useState } from "react";
import Messaggio from "./messaggio";
import "./style.css";

function App() {
  // Stato per i messaggi
  const [messages, setMessages] = useState([
    { text: "ciao cristian", className: "" },
    { text: "ciao come stai?", className: "blu-right" },
    { text: "bene tu?", className: "" },
    { text: "tutto bene grazie", className: "blu-right" },
    { text: "ottimo alla prossima!", className: "" },
    { text: "ok buona giornata", className: "blu-right" },
  ]);

  // Stato per il messaggio che l'utente scrive
  const [newMessage, setNewMessage] = useState("");

  // Funzione per inviare il messaggio
  const handleSubmit = (e) => {
    e.preventDefault(); // evita il refresh della pagina

    if (newMessage.trim() === "") return; // evita di inviare messaggi vuoti

    // Aggiunge il messaggio dell'utente
    setMessages([...messages, { text: newMessage, className: "blu-right" }]);

    // Svuota il campo input
    setNewMessage("");

    // Dopo 1 secondo, genera una risposta casuale
    setTimeout(() => {
      const randomResponses = [
        "scusa ora devo andare",
        "eh perdonami devo proprio andare",
        "sono un po occupato ora parliamo dopo?",
        "devo veramente andare via...?",
        "scusami...devo andare"
      ];
      // Genera una risposta casuale da uno degli elementi dell'array
      const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];

      // Aggiungi la risposta al contrario (dalla parte sinistra)
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: randomResponse, className: "" } // risposta con sfondo diverso
      ]);
    }, 1000); // Risposta dopo 1 secondo
  };

  return (
    <>
      <section>
        <main>
          <h1>APPLICAZIONE REACT</h1>

          {/* Mostra tutti i messaggi */}
          {messages.map((msg, index) => (
            <Messaggio key={index} text={msg.text} className={msg.className} />
          ))}

          {/* Form per inserire il nuovo messaggio */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="text"
              placeholder="Digita un messaggio"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <input type="submit" value="Invia" />
          </form>
        </main>
        
      </section>
    </>
  );
}

export default App;
