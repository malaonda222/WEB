/*Obiettivo:

Creare un campo di input che permetta all'utente di scrivere un testo.
Due bottoni per convertire il testo in maiuscolo o in minuscolo.
Visualizzare sotto l'input il testo convertito.

Requisiti:
Un campo di input.
Due bottoni: uno per convertire il testo in maiuscolo e uno per convertirlo in minuscolo.
Mostra sotto l'input il testo convertito dinamicamente, ogni volta che l'utente clicca uno dei bottoni.*/


import React, { useState } from "react";

// const Converti = () => {
    
//     const[testo, setTesto] = useState("")

//     const[maiuscolo, setMaiuscolo] = useState("")
//     const[minuscolo, setMinuscolo] = useState("")

//     const handleChange = (e) => {
//         setTesto(e.target.value);
//     }

//     const convertiMaiuscolo = () => {
//         setMaiuscolo(testo.toUpperCase())
//     }

//     const convertiMinuscolo = () => {
//         setMinuscolo(testo.toLowerCase())
//     }
    
//     return (
//         <div>
//         <input
//             type = "text"
//             value = {testo}
//             placeholder = "Inserisci il testo da trasformare: "
//             onChange={handleChange}>
//             </input>
//             <p>{testo}</p>
//             <button onClick={convertiMaiuscolo}>Trasforma in Maiuscolo</button>
//             <button onClick={convertiMinuscolo}>Trasforma in Minuscolo</button>
        
//         <p>Testo Maiuscolo: {maiuscolo}</p>
//         <p>Testo Minuscolo: {minuscolo}</p>

//         <p>Hai scritto: {testo}</p>
//         </div>  
//     );
// };

// export default Converti 




const Converti = () => {
    
    const[testo, setTesto] = useState("")

    const[maiuscolo, setMaiuscolo] = useState("")
    const[minuscolo, setMinuscolo] = useState("")

    const handleChange = (e) => {
        setTesto(e.target.value);
    }

    const convertiMaiuscolo = () => {
        setMaiuscolo(testo.toUpperCase())
    }

    const convertiMinuscolo = () => {
        setMinuscolo(testo.toLowerCase())
    }

    return (
        <div>
            <input
            type = "text"
            value = {testo}
            placeholder = "Inserisci il tuo testo: "
            onChange={handleChange}></input>

            <p>{testo}</p>
            <button onClick={convertiMaiuscolo}>converti in Maiuscolo</button>
            <button onClick={convertiMinuscolo}>converti in Minuscolo</button>

            <p>Testo Maiuscolo: {maiuscolo}</p>
            <p>Testo Minuscolo: {minuscolo}</p>
            <p>Parola originale: {testo}</p>
        </div>
    )
}



export default Converti