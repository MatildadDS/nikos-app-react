import { useState, useEffect } from "react";

function LastnameValidator(config = { min: 2, max: 15 }){
    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    useEffect(
        () => {
            setLastnameError("");
          if (!lastname) return;
    
          if (lastname.length < config.min) {
            setLastnameError(`Votre prénom doit faire au moins ${config.min} caractères.`);
          } else if (lastname.length > config.max) {
            setLastnameError(
              `Votre prénom ne peut pas dépasser ${config.max} caractères.`
            );
          }
        },
        [lastname, config.min, config.max]
      );
    
      return [lastname, setLastName, lastnameError];
}


export default LastnameValidator;