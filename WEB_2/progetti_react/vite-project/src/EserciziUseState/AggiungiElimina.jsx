/*4. Aggiungi/Elimina Elementi da una Lista
 
Obiettivo: Crea una lista di elementi dove l'utente può aggiungere o rimuovere oggetti dalla lista.

Requisiti:
Un titolo che dice "Gestione Lista"
Un input per inserire un nuovo elemento nella lista
Un bottone per aggiungere l'elemento
Una lista che mostra gli elementi inseriti
Ogni elemento ha un bottone per rimuoverlo

Concetti: gestione di array nello stato, rimozione di elementi, aggiornamento dinamico della lista */ 

import React, { useState } from "react";

const AggiungiElimina = () => {
    /*Stato per memorizzare la lista di elementi e l'input*/
    const[listaElementi, setListaElementi] = useState([]); {/*creo i due useState per la lista e per l'elemento*/}
    const[elemento, setElemento] = useState(""); 

    const aggiungiElemento = () => {
        if(elemento.trim() !== "") {
            const nuovoElemento = {id: Date.now(), nome: elemento}
            setListaElementi([...listaElementi, nuovoElemento]);
            setElemento("")
        }
    };

    const rimuoviElemento = (id) => {
        setListaElementi(listaElementi.filter(e => e.id !== id));
    }; 

    return (
        <div>
            <h3>Gestione Lista</h3>
            <input
            type = "text"
            value = {elemento}
            onChange={(e) => setElemento(e.target.value)}
            placeholder = "Inserisci un nuovo elemento: "
            ></input>
            <button onClick={aggiungiElemento}>Aggiungi</button>

             <ul>
                {listaElementi.length > 0 ? (
                    listaElementi.map((e) => (
                        <li key={e.id}>
                            {e.nome} {/*nome dell'elemento*/}
                            <button onClick={() => rimuoviElemento(e.id)}>Rimuovi</button> {/*Bottone per rimuovere l'elemento*/}
                        </li>
                    ))
                ) : (
                    <li>Non ci sono elementi nella lista.</li>  // Messaggio se la lista è vuota
                )}
            </ul>
        </div>
    )
}

export default AggiungiElimina 