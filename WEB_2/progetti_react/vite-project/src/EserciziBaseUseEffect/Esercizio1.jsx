/*Obiettivo: Usa useEffect per fare il log degli aggiornamenti dello stato in base alle 
dipendenze.
Crea un componente con due stati:
Un contatore count (inizializzato a 0).
Un testo text (inizializzato a una stringa vuota).
Usa useEffect per eseguire tre cose diverse:
Fai un log al primo render del componente (quando il componente viene montato).
Fai un log ad ogni aggiornamento del componente (render ogni volta che lo stato cambia).
Fai un log solo quando il count cambia.*/

import React, { useState, useEffect } from "react";

const Esercizio1 = () => {
    const[count, setCount] = useState(0)
    const[text, setText] = useState("")

    useEffect(() => {
        console.log('Primo log: array vuoto')
    }, [])
    
    useEffect(() => {
        console.log('Secondo log: aggiornamento')
    }, )

    useEffect(() => {
        console.log('Terzo log: contatore cambiato')
    }, [count]);

    return (
        <div>
            <h2>Esercizio useEffect</h2>

            <p>Contatore: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Aumenta</button>

            <p>Testo: {text}</p>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholde="Scrivi qualcosa...">
            </input>
        </div>
    );
};

export default Esercizio1