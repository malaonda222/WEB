/*1. Contatore Incrementale/Decrementale
Obiettivo: Crea un contatore che possa essere incrementato e decrementato tramite due bottoni separati.

Requisiti
Un titolo che dice "Contatore"
Due bottoni: uno per incrementare il contatore e uno per decrementarlo
useState per mantenere il valore del contatore
Mostra il valore corrente del contatore sotto i bottoni
Concetti: gestione numerica dello stato, handling di eventi*/ 


import React, { useState }from "react";

const Contatore = () => {

    const[valore, setValore] = useState(0)

    const aumenta = () => {
        setValore(oldValore => oldValore + 1)
    }

    const diminuisci = () => {
        setValore(oldValore => oldValore - 1)
    }

    return (
    <div>
        <h3>Contatore</h3>
        <div className='card' style={{width: "18rem"}}>
        <div>{valore}</div>
        <button className='btn btn-success'onClick={aumenta}> + </button>
        <button className='btn btn-danger'onClick={diminuisci}> - </button>
    </div>
    </div>
    );
};

export default Contatore