import React, { useState, useRef, useEffect } from "react";
import useSWR from "swr";
import Messaggio from "./messaggio";
import "./style.css";

// SWR fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const [messages, setMessages] = useState([
    { text: "ciao cristian", className: "" },
    { text: "ciao come stai?", className: "blu-right" },
    { text: "bene tu?", className: "" },
    { text: "tutto bene grazie", className: "blu-right" },
    { text: "ottimo alla prossima!", className: "" },
    { text: "ok buona giornata", className: "blu-right" },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  const { data} = useSWR(
    "https://mocki.io/v1/829eaa1d-3361-44f2-b37c-0331d61eb32b",
    fetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;


    setMessages((prev) => [
      ...prev,
      { text: newMessage, className: "blu-right" },
    ]);
    setNewMessage("");

    setTimeout(() => {
      if (data.replies) {
        const randomReply =
          data.replies[Math.floor(Math.random() * data.replies.length)];
        setMessages((prev) => [...prev, { text: randomReply, className: "" }]);
      }
    }, 1500);
  };

  return (
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
  );
}

export default App;
