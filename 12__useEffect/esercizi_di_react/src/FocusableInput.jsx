import { useEffect,useRef } from "react"

const FocusableInput= ()=>{
const inputRef= useRef();

useEffect(() => {
    inputRef.current?.focus();  
  }, []);


    return(

        <>
        <form>

        <input className="ml-10" type="text" name="text" ref={inputRef} placeholder="  scrivi qualcosa"/>
    
        </form>
        </>

    )
}

export default FocusableInput