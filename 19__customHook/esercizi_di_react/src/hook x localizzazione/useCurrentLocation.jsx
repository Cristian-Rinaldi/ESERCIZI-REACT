// Scrivere il gancio personalizzato useCurrentLocation, che utilizza l'API navigator.geolocation del browser per ottenere la posizione attuale dell'utente tramite il metodo incorporato getCurrentPosition. Il gancio deve restituire la posizione attuale e una funzione per ottenere la posizione attuale, nonché gli stati di errore e di caricamento. I dettagli su come utilizzare questa API sono disponibili qui:

import { useState } from "react";

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocalizzazione non supportata");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  };

  return { location, error, loading, getLocation };
}

export default useCurrentLocation;
