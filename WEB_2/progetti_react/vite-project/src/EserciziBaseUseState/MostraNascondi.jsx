/*1. Mostra/Nascondi Testo

Obiettivo: Un bottone che mostra/nasconde un paragrafo di testo
Requisiti:
●​ Un bottone con scritto "Mostra" o "Nascondi"
●​ useState con valore booleano (true/false)
●​ Quando clicchi, il testo appare o scompare
Concetti: boolean state, conditional rendering*/ 

import React, { useState } from 'react'

const MostraNascondi = () => {
    const[mostra, setMostra] = useState(true)

    return (
        <div>
            <button onClick={() => setMostra(!mostra)}> {/*!mostra inverte il valore attuale di mostra. Se mostra è true, diventa false, e viceversa.*/}
                {mostra ? "Nascondi" : "Mostra"} {/*condizione (operatore ternario) che cambia il testo del pulsante*/}
            </button>
            {mostra && <p>Ciao!!!</p>} {/*il messaggio viene stampato solo se mostra è vero*/}

        </div>
    )
}


export default MostraNascondi

