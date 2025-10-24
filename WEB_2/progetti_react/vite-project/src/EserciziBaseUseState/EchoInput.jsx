/*Obiettivo: Quello che scrivi nell'input appare sotto in tempo reale
Requisiti:
● Un campo input
● useState per il testo
● Mostra sotto l'input: "Hai scritto: [testo]"
● Si aggiorna mentre scrivi
Concetti: input handling, onChange even*/
import React, { useState } from "react";

 
const EchoInput = () => {
    const[testo, setTesto] = useState("")

    return (
        <div>
            <input
                type="text" /*attributo obbligatorio, specifica il tipo di dato che l'input deve accettare*/
                value={testo} /*valore corrente dell'input, è obbligatorio*/
                onChange={(e) => setTesto(e.target.value)} /*viene chiamata ogni volta che l'utente digita nell'input. Ogni volta che il valore cambia, setTesto aggiorna lo stato testo con il nuovo valore (preso da e.target.value).*/
                placeholder="Scrivi qualcosa...">
            </input>

            <p>Hai scritto: {testo}</p>
        </div>
    )
};

export default EchoInput