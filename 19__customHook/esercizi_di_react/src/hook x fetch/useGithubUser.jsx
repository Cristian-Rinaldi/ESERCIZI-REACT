/*Scrivere il gancio personalizzato useCurrentLocation, che utilizza l'API navigator.geolocation del browser per ottenere la posizione attuale dell'utente tramite il metodo incorporato getCurrentPosition. Il gancio deve restituire la posizione attuale e una funzione per ottenere la posizione attuale, nonché gli stati di errore e di caricamento. I dettagli su come utilizzare questa API sono disponibili qui: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API */

import { useState } from "react";

export const useGithubUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    if (!username) return;
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Utente non trovato");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message || "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  };

  return { user, error, loading, fetchUser };
};