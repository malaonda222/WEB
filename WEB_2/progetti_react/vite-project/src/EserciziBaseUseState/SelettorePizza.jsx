/*Obiettivo: Dropdown per scegliere la tua pizza preferita e mostrare la scelta
Requisiti:
● Select con 4-5 tipi di pizza (Margherita, Diavola, Capricciosa...)
● useState per la pizza selezionata
● Mostra: "Hai scelto: [nome pizza]"
Concetti: select handling, string stat*/ 

import React, { useState } from "react";

const SelettorePizza = () => {
    const[pizza, setPizza] = useState("")

    const handleChange = (e) => {
        setPizza(e.target.value)
    }

    return (
        <div>
            <h4>Scegli la tua fucking pizza 🍕</h4>
            <select value={pizza} onChange={handleChange}>
                <option value="" disabled>Pizze...</option>
                <option value={'diavola'}>Diavola</option>
                <option value={'capricciosa'}>Capricciosa</option>
                <option value={'bufala'}>Bufala</option>
                <option value={'Calabrese'}>Calabrese</option>
            </select>
        <p>Hai scelto: {pizza}</p>
        </div>
    );
};

export default SelettorePizza