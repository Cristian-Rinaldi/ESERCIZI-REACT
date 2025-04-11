import Messaggio from "./messaggio";

import "./style.css"


function App(){
  
    return(
      <>
      <body>
      <main>
        <h1>APPLICAZIONE REACT</h1> 
     <Messaggio text="ciao cristian " />
   <Messaggio className="blu-right" text="ciao come stai?" />
   <Messaggio text="bene tu?" />
   <Messaggio className="blu-right" text="tutto bene grazie" />
   <Messaggio text="ottimo alla prossima!" />
   <Messaggio className="blu-right" text="ok buona giornata" />
 
 <form>
   <input type="text" name="text" id="text" placeholder=" digita un messaggio "/>
   <button>invia</button>

 </form>
     </main>
      </body>



      </>
    )
}

export default App;

