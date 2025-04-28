/*Crea un Containercomponente che esegua il rendering dei suoi elementi figlio all'interno di un div tag.
Usate un div tag con uno sfondo bianco e un bordo rosso.
Aggiungere un title prop elemento che conterrà il valore del titolo da visualizzare prima degli elementi figlio.
Rendi comprimibile il contenitore, in modo che quando si clicca sul titolo gli elementi secondari vengano nascosti o nuovamente mostrati.
Utilizzare il useStategancio per tenere traccia dello stato compresso.*/


import ContainerComponents from "./ContainerComponent"



function App(){
    return(
      
  <ContainerComponents title="titolo ">
    <p>sono un paragrafo </p>
    <p>sono un paragrafo </p>
    <p>sono un paragrafo </p>
    <p>sono un paragrafo </p>
  </ContainerComponents>
    
    )
}

export default App;
