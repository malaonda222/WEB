/*Obiettivo: Crea un'app che cambia il colore dello sfondo della pagina ogni volta che si 
clicca un bottone.

Requisiti:
Un titolo che dice "Cambia Background"
3 bottoni per cambiare il colore di sfondo (Rosso, Verde, Blu)
useState per memorizzare il colore di sfondo
Il colore dello sfondo cambierà quando clicchi un bottone
Concetti: gestione dei colori, inline styles, handling di eventi*/ 

import React, { useState } from "react";

const Background = () => {

    const[coloreSfondo, setColoreSfondo] = useState("");

    const cambiaSfondo = (nuovoColore) => {
        setColoreSfondo(nuovoColore);
        document.body.style.backgroundColor = nuovoColore;
    };

    return (
        <div>
            <h2>Cambia Background</h2>
            <button onClick={() => cambiaSfondo('red')}>Rosso</button>
            <button onClick={() => cambiaSfondo('green')}>Verde</button>
            <button onClick={() => cambiaSfondo('blue')}>Blu</button>
            <button onClick={() => cambiaSfondo('yellow')}>Giallo</button>
            <button onClick={() => cambiaSfondo('purple')}>Viola</button>
            <div></div>
            <p>Colore dello sfondo selezionato: {coloreSfondo}</p>
        </div>
    )
}

export default Background