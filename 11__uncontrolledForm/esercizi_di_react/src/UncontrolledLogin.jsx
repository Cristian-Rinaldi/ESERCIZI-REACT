/*Crea un componente non controllato chiamato UncontrolledLogin, contenente tre input: un input per il nome utente, uno per la password e una casella di controllo "Ricorda". Aggiungi un pulsante "Accedi" al componente Login.
Quando si fa clic, il gestore eventi associato al pulsante dovrebbe richiamare una funzione onLogin che stamperà i valori degli input.
Prova ad accedere ai valori del modulo utilizzando l'API DOM leggendo l'event.target del gestore eventi onSubmit.
Aggiungere un secondo pulsante che richiama la funzione loginWithFormData che stampa i valori degli input utilizzando l'API FormData.*/

import React from "react";

const UncontrolledLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const checkbox = form.elements.checkbox.checked;

    const data = {
      username,
      password,
      checkbox,
    };

    console.log("Dati dal submit (DOM):", data);
    form.reset();
  };

  // const onLogin = (event) => {
  //   event.preventDefault();

  //   const form = event.target.form
  //   const formData = new FormData(form);

  //   const data = {
  //     username: formData.get('username'),
  //     password: formData.get('password'),
  //     checkbox: formData.get('checkbox') === 'on'
  //   };

  //   console.log('Dati da FormData:', data);
  //   form.reset();
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome utente: </label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>
          <input type="checkbox" name="checkbox" /> Ricorda
        </label>
      </div>
      <div>
        <button type="reset">RESET</button>
        <button type="submit"> ACCEDI</button>
      </div>
    </form>
  );
};

export default UncontrolledLogin;
