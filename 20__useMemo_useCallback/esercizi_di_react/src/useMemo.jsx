/*Crea un componente FilteredList che riceva un elenco di oggetti, ciascuno contenente un nome, un ID e una proprietà "età". Il componente FilteredList deve visualizzare solo gli elementi dell'elenco la cui età è maggiore di 18 anni e il filtraggio deve essere eseguito solo quando l'elenco cambia. Utilizza useMemo per memorizzare l'elenco filtrato.*/


import React, { useMemo } from "react";

function FilteredList({items}) {
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.età > 18);
  }, [items]);

  return (
    <div>
      <h2>Persone maggiorenni:</h2>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.nome} ({item.età} anni)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
