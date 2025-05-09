import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UserDetail = () => {
  const [idUtente, setIdUtente] = useState(""); // Stato per l'ID utente
  const [triggerFetch, setTriggerFetch] = useState(false); // Stato per attivare la fetch

  // Fetch dei dati solo se triggerFetch è true e idUtente è definito
  const { data, error, isLoading } = useSWR(
    triggerFetch && idUtente ? `https://jsonplaceholder.typicode.com/users/${idUtente}` : null,
    fetcher
  );

  if (error) return <p>Si è verificato un errore</p>;
  if (isLoading) return <p>Caricamento in corso...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idUtente) {
      setTriggerFetch(true); // Attiva la fetch quando l'utente preme "Invia"
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          value={idUtente}
          onChange={(e) => setIdUtente(e.target.value)} // Gestisce il cambiamento dell'input
        />
        <button type="submit">Invia</button>
      </form>

      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.address.street}</p> {/* Mostra l'indirizzo dell'utente */}
        </div>
      )}
    </>
  );
};

export default UserDetail;
