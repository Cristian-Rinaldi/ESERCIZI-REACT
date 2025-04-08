import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const visualizzaAvviso = () => {
    const dataLocale = new Date();
    alert(`L'ora corrente è: ${dataLocale.toLocaleTimeString()}`);
  };

  return (
    <div>
      <h1>Benvenuto!</h1>
      <AlertClock onClick={visualizzaAvviso} />
    </div>
  );
}

export default App;
