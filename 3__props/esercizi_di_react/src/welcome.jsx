import Eta from "./eta";

function Welcome({name="utente", age}){

    return(
        <>

        <p>Welcome, <strong> {name} </strong></p>
        <Eta age={age} />


        </>
    )
}
export default Welcome;