/*Crea un hook personalizzato che tenga traccia dello stato di un modulo controllato con gli input di nome utente e password e restituisca il valore corrente degli input nonché un gestore eventi per aggiornare entrambi gli input.*/

import { useForm } from "./useForm";

const Form = () => {
  const {formData,handleChange,handleSubmit} = useForm()

 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Inserisci il nome utente"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Inserisci la password"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
