import EsercizioUseState from "./esercizioUseState";

function App(){
    return(
      <>
    <EsercizioUseState />
      </>
    )
}

export default App;



//--------------------------------------------------------------------------------------------------------------------------

// import { useState, useEffect } from "react";

// function App() {
//   const messaggi = [
//     "Sono Cristian",
//     "Sono Mario",
//     "Sono Luca",
//     "Sono Alfonso",
//     "Sono Michele",
//     "Sono Peppe",
//     "Sono Anna"
//   ];

//   const [testo, setTesto] = useState("chi sei");
//   const [mostraBenvenuto, setMostraBenvenuto] = useState(false);

//   const funzioneCambio = () => {
//     setTesto(messaggi[Math.floor(Math.random() * messaggi.length)]);
//   };

//   // useEffect per mostrare "Benvenuto!" per 3 secondi ogni volta che `testo` cambia
//   useEffect(() => {
//     if (testo !== "chi sei") {
//       setMostraBenvenuto(true);

//       const timer = setInterval(() => {
//         setMostraBenvenuto(false)
//       }, 3000);
//       return ()=> clearInterval(timer)
//     }
//   }, [testo]); // Si attiva ogni volta che `testo` cambia

//   return (
//     <>
//       <h2>{testo}</h2>
//        {mostraBenvenuto && <p>benvenuto!!</p> }
//       <button onClick={funzioneCambio}>Cambia</button>
//     </>
//   );
// }

// export default App;


//-------------------------------------------------------------------------------------------------------------------------------

// import { useState, useEffect } from "react";

// function App() {
//   const [completato, setCompletato] = useState(false); // Stato per gestire il completamento
//   const [progress, setProgress] = useState(0); // Stato per gestire la progress bar

//   // useEffect per simulare il caricamento
//   useEffect(() => {
//     let progressTimer;

//     if (!completato) {
//       progressTimer = setInterval(() => {
//         setProgress((oldProgress) => {
//           if (oldProgress >= 100) {
//             clearInterval(progressTimer);
//             setCompletato(true); // Completamento del caricamento
//             return 100;
//           }
//           return oldProgress + 1; // Aumenta il progresso ogni millisecondo
//         });
//       }, 30); // Aumenta il progresso ogni 30ms per simulare il caricamento

//       // Pulizia dell'interval quando il componente viene smontato
//       return () => clearInterval(progressTimer);
//     }
//   }, [completato]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>{completato ? "Caricamento completato!" : "Caricamento in corso..."}</h2>
//       <div
//         style={{
//           width: "100%",
//           backgroundColor: "#ddd",
//           height: "30px",
//           borderRadius: "5px",
//           marginTop: "20px",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: `${progress}%`,
//             backgroundColor: "#4caf50",
//             borderRadius: "5px",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default App;
  