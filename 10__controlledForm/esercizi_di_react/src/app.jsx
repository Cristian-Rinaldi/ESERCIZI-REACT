/*
Crea un componente Login contenente tre input: un input per il nome utente, uno per la password e una casella di controllo "Ricorda". Tutti e tre gli input devono essere componenti controllati. Aggiungi un pulsante "Login" al componente Login. Questo pulsante deve essere disabilitato finché gli input per il nome utente e la password sono vuoti. Quando viene cliccato, il gestore eventi associato al pulsante deve chiamare un'istanza onLogin functionpassata come prop al componente Login, passandogli lo stato, che ne stamperà il valore.
Aggiungere un pulsante "reset" al componente Login che, se cliccato, cancella il contenuto di tutti e tre gli input. Utilizzare l'elemento form per gestire l'invio del form e collegare il gestore eventi handleLogin all'evento onSubmit dell'elemento form. Come si impedisce il comportamento predefinito dell'elemento form?*/
import "./style.css"
import Login from "./Login"
import InteractiveWelcome from "./InteractiveWelcome"
const App = ()=>{
const handleDati= (dati)=>{
console.log(dati)
}

    return(
        <section>

            <InteractiveWelcome  />  
              < Login onLogin={handleDati}   />
        </section>
        
        
       


    )
}
export default App 