/*Obiettivo: 3 bottoni (Rosso, Verde, Blu) che cambiano il colore di un testo
Requisiti:
● Un titolo "Ciao Mondo!"
● 3 bottoni colorati
● useState per memorizzare il colore scelto
● Il testo cambia colore quando clicchi un bottone
Concetti: string state, inline styles */
import { useState } from "react"


const CambioColoreTesto1 = () => {
    const [colore, setColore] = useState()

    const nuovoColore = (nuovoColore) => {
        setColore(nuovoColore)
    }

    return (
        <div>
            <h3 style={{color: colore}}>Mondo</h3>
            <button
            style = {{color: 'white', backgroundColor: 'red'}}
            onClick={() => nuovoColore('red')}>Rosso
            </button>

            <button
            style = {{color: 'white', backgroundColor: 'green'}}
            onClick={() => nuovoColore('green')}>Verde
            </button>

            <button
            style = {{color: 'white', backgroundColor: 'purple'}}
            onClick={() => nuovoColore('purple')}>Viola
            </button>
        </div>
    );
};

export default CambioColoreTesto1