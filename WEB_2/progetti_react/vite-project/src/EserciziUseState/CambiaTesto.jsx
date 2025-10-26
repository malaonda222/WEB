/*Obiettivo:

Creare 3 bottoni che cambiano il testo di un paragrafo.
Requisiti:

Un titolo "Cambia il Testo!"
3 bottoni che cambiano il contenuto di un paragrafo
useState per memorizzare il testo mostrato
Ogni bottone cambia il contenuto del paragrafo al clic
Esercizio Dettagliato:
Quando clicchi il primo bottone, il paragrafo mostrerà "Benvenuto nel mondo di React!"
Quando clicchi il secondo bottone, il paragrafo mostrerà "Impariamo a programmare!"
Quando clicchi il terzo bottone, il paragrafo mostrerà "React è divertente!"*/

import React, { useState } from "react";

const CambiaTesto = () => {

    const[testo, setTesto] = useState("")

    const primoTesto = () => setTesto('Benvenuto nel mondo di React!')
    const secondoTesto = () => setTesto('Impariamo a programmare!')
    const terzoTesto = () => setTesto('React è divertente!') 

    return (
        <div>
            <h3>Cambia il testo</h3>
            <p>{testo}</p>
            <button onClick={primoTesto} style = {{ backgroundColor: 'blue', marginRight: '10px' }}>1️⃣</button>
            <button onClick={secondoTesto} style = {{ backgroundColor: 'blue', marginRight: '10px' }}>2️⃣</button>
            <button onClick={terzoTesto} style = {{ backgroundColor: 'blue'}}>3️⃣</button>
        </div>
    )
}

export default CambiaTesto 


// const CambiaTesto = () => {

//     const[testo, setTesto] = useState("")
//     const toggleTesto = (nuovoTesto) => {
//         setTesto(nuovoTesto)
//     }

//     return (
//         <div>
//             <h3>Cambia il tuo testo:</h3>
//             <p>{testo}</p>
//             <button style = {{marginRight: '10px'}} onClick={() => toggleTesto('Benvenuto nel mondo di React!')}>Prima Opzione</button>
//             <button style = {{marginRight: '10px'}} onClick={() => toggleTesto('Impariamo a programmare!')}>Seconda Opzione</button>
//             <button onClick={() => toggleTesto('React è divertente!')}>Terza Opzione</button>
//         </div>
//     )
// }

// export default CambiaTesto;

