/*Crea un componente UserList che fetcha una lista di utenti da:
https://jsonplaceholder.typicode.com/users

Usa useSWR per fare la chiamata API e mostra nome ed email. */

import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UserList = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const handleUpdate = async () => {
    await mutate();
    setLastUpdated(new Date().toLocaleTimeString());
  };

  if (error) return <div>Errore nel caricamento.</div>;
  if (isLoading) return <div>Caricamento...</div>;

  return (
    <>
      <button onClick={handleUpdate}>🔄 AGGIORNA</button>
      <p>Dati aggiornati alle: <strong>{lastUpdated}</strong></p>
      <ul>
        {data.map((value) => (
          <li key={value.id}>
            {value.name} — {value.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
