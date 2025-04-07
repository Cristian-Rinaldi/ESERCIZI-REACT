import HelloWorld from "./helloWorld"

function App(){
    return(
        <div>
            < HelloWorld/>
           
        </div>
    )
}

export default App;

/*
1) DOMANDA: Puoi usare il componente Hello più di una volta nel componente App? 
1)RISPOSTA: si posso importare più di una volta basta scrivere più volte la sintassi del compponente come ad esempio
import HelloWorld from "./helloWorld"
function App(){
    return(
        <div>
            < HelloWorld/>
            < HelloWorld/>
            < HelloWorld/>
        </div> )}
export default App;


2)DOMANDA: Cosa succede se lo fai? 
2)RISPOSTA: te lo manda a schermo tutte le volte che lo scrivi lo stesso componente 


3)DOMANDA:  Puoi eseguire il rendering del componente Message direttamente all'interno del componente App?
3)RISPOSTA: si possiamo eseguire il rendering del componente message nell'app.jsx 


4)DOMANDA: Cosa succede se lo fai? 
4)RISPOSTA: sarà mandato a schermo direttamente da app senza passare da HelloWorld
*/