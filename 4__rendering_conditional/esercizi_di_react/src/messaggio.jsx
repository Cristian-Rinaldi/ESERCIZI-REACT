

function Messaggio({ age }) {
  return (
    <p>
      {age > 18 ? 'Hai più di 18 anni!' : 'Sei molto giovane!'}
    </p>
  );
}

export default Messaggio;
