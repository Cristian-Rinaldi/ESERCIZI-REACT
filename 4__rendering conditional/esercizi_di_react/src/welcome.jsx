import Age from "./age";
import Messaggio from "./messaggio";

function Welcome ({name,age}){
    return(
        <>
        <p> welcome,{name}!</p>
            
        {age > 18 && <Age age={age} /> } 
        {age > 18 && age < 65 && <Age age={age} /> } 
        {age > 18 && name ==="john" && <Age age={age} /> } 
        {age > 18 && <Age age={age} /> } 
       <Messaggio age={age} />
        
        </>
    )
    
    };
    export default Welcome;