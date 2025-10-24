/*1. Mostra/Nascondi Testo

Obiettivo: Un bottone che mostra/nasconde un paragrafo di testo
Requisiti:
●​ Un bottone con scritto "Mostra" o "Nascondi"
●​ useState con valore booleano (true/false)
●​ Quando clicchi, il testo appare o scompare
Concetti: boolean state, conditional rendering*/ 


import React, { useState } from "react";

const Mostranascondi1 = () => {
    const[mostra, setMostra] = useState(true)

    const toggleMostra = () => {
        setMostra(!mostra)
    }

    return (
        <div>
        <button onClick={toggleMostra}>
            {mostra ? "Nascondi" : "Mostra"}
        </button>
        {mostra && <p>Ciao a tutti!!!</p>}
        </div>
    );
};

export default Mostranascondi1