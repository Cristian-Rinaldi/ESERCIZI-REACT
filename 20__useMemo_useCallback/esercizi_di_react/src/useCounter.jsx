/*Crea un hook personalizzato useCounter che tenga traccia dello stato di un contatore e ne restituisca il valore corrente, oltre a tre funzioni per incrementare, decrementare e azzerare il contatore. Utilizza useCallback per memorizzare le funzioni utilizzate per incrementare, decrementare e azzerare il contatore.*/

import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
