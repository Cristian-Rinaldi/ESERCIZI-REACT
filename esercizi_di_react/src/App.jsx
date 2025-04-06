import Card from "./Card";


function App() {
  const cardItem = {
    img: "assets/react.svg",
    titolo: "React",
    content: "Una libreria per interfacce utente"
  };

  return (
    <div className="app-container">
      <h1>Hello World</h1>
      <Card
        img={cardItem.img}
        titolo={cardItem.titolo}
        content={cardItem.content}
      />
    </div>
  );
}

export default App;
