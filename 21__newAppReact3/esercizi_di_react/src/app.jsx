/*Estendere l'applicazione di chat creata negli esercizi precedenti per consentire all'utente di inviare nuovi messaggi. L'obiettivo è aggiungere un campo di input e un pulsante "Invia" che consentano all'utente di digitare un nuovo messaggio e aggiungerlo alla chat al momento dell'invio.

Requisiti:

Quando l'utente clicca su "Invia" o preme il tasto "Invio", il nuovo messaggio viene aggiunto alla serie di messaggi esistenti.
L'invio di un nuovo messaggio dovrebbe essere impedito se il campo di input è vuoto o contiene solo spazi.
Dopo aver inviato il messaggio, il campo di input dovrebbe essere cancellato.
Dopo aver inviato il messaggio, assicurati che la finestra della chat scorra automaticamente fino in fondo*/

import React, { useState,useRef,useEffect } from "react";
import Messaggio from "./messaggio";
import "./style.css";

function App() {

  const [messages, setMessages] = useState([
    { text: "ciao cristian", className: "" },
    { text: "ciao come stai?", className: "blu-right" },
    { text: "bene tu?", className: "" },
    { text: "tutto bene grazie", className: "blu-right" },
    { text: "ottimo alla prossima!", className: "" },
    { text: "ok buona giornata", className: "blu-right" },
  ]);

  const chatEndRef = useRef(null); 

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [messages]);

  const [newMessage, setNewMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, className: "blu-right" }]);

   
    setNewMessage("");

  
    setTimeout(() => {
      const randomResponses = [
        "scusa ora devo andare",
        "eh perdonami devo proprio andare",
        "sono un po occupato ora parliamo dopo?",
        "devo veramente andare via...",
        "scusami...devo andare"
      ];
     
      const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];

     
      setMessages((messaggiPrecedenti) => [
        ...messaggiPrecedenti,
        { text: randomResponse, className: "" } 
      ]);
    }, 2000); 
  };

  return (
    <>
      <section>
        <main>
          <h1>APPLICAZIONE REACT</h1>
        
        <hr />
          {messages.map((msg, index) => (
            <Messaggio key={index} text={msg.text} className={msg.className} />
          ))}
<div ref={chatEndRef} />

      
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="text"
              placeholder="  Digita un messaggio"
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
