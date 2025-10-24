/*Obiettivo: 3 bottoni (Rosso, Verde, Blu) che cambiano il colore di un testo
Requisiti:
● Un titolo "Ciao Mondo!"
● 3 bottoni colorati
● useState per memorizzare il colore scelto
● Il testo cambia colore quando clicchi un bottone
Concetti: string state, inline styles */ 

import React, { useState } from "react"

const CambioColoreTesto = () => {
    const[colore, setColore] = useState()

    const cambiaColoreRosso = () => setColore('red')
    const cambiaColoreVerde = () => setColore('green')
    const cambiaColoreBlu = () => setColore('blue')

    return (
        
        <div>
            <h3 style = {{color: colore}}>Ciao!!!</h3>
            
            <button 
            style={{backgroundColor: 'red', color: 'white'}} 
            onClick={cambiaColoreRosso}>Rosso
            </button>

            <button 
            style = {{backgroundColor: 'green', color: 'white'}}
            onClick={cambiaColoreVerde}>Verde
            </button>

            <button
            style = {{backgroundColor: 'blue', color: 'white'}}
            onClick={cambiaColoreBlu}>Blu
            </button>

        </div>
        
    
    )
}


export default CambioColoreTesto