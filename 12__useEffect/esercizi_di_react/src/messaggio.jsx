import { useEffect, useRef,useState } from "react";
const Messaggio= ()=>{

const[testo,setTesto]=useState("")
const paragrafoRef= useRef();



useEffect(()=>{
setTesto("messaggio creato al montaggio")

},[])
    return(

<p ref={paragrafoRef} > {testo}</p>
    )
}
export default Messaggio