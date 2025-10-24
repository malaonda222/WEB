/*Obiettivo: Quello che scrivi nell'input appare sotto in tempo reale
Requisiti:
● Un campo input
● useState per il testo
● Mostra sotto l'input: "Hai scritto: [testo]"
● Si aggiorna mentre scrivi
Concetti: input handling, onChange even*/

import React, { useState } from "react";

const EchoInput1 = () => {
    const[testo, setTesto] = useState("")

    const handleChange = (e) => {
        setTesto(e.target.value)
    }
    
    return (
        <div>
            <input
            type= "text"
            value = {testo}
            placeholder="Scrivi qualcosa..."
            onChange={handleChange}
            >
            </input>

        <p>Hai scritto: {testo}</p>
        </div>
        
    );
};

export default EchoInput1