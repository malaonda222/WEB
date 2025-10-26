/*Obiettivo: Impara a "ripulire" un effetto quando il componente 
viene smontato o l'effetto cambia.

Crea un timer che aggiorna ogni secondo una variabile seconds 
(inizializzata a 0) utilizzando setInterval.

Aggiungi un cleanup:

Quando il componente viene smontato, ferma il timer.

Verifica che il timer venga rimosso correttamente tramite un log.
Suggerimento: Pensa a come usare il ritorno di useEffect per 
eseguire il cleanup (cancellare l'intervallo).*/


import React, { useState, useEffect } from "react";

const Esercizio2 = () => {
    const[seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Timer avviato!")

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000)

        return () => {
            clearInterval(interval);
            console.log("Timer pulito")
        }
    }, [])

    return (
        <div>
            <h2>Timer con useEffect</h2>
            <p>Secondi trascorsi: {seconds}</p>
        </div>
    );
};

export default Esercizio2