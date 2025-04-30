  import { useContext } from "react";
  import { LanguagesContext } from "./LanguagesContext";

  const Hello = () => {
    const { language, messages } = useContext(LanguagesContext);

    return <h2>{messages[language]}</h2>;  
  };

  export default Hello;
