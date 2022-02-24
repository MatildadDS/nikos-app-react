import { useState, useEffect } from "react";

function FirstnameValidator(config = { min: 2, max: 15 }){
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    useEffect(
        () => {
          setFirstnameError("");
          if (!firstname) return;
    
          if (firstname.length < config.min) {
            setFirstnameError(`Votre prénom doit faire au moins ${config.min} caractères.`);
          } else if (firstname.length > config.max) {
            setFirstnameError(
              `Votre prénom ne peut pas dépasser ${config.max} caractères.`
            );
          }
        },
        [firstname, config.min, config.max]
      );
    
      return [firstname, setFirstName, firstnameError];
}


export default FirstnameValidator;