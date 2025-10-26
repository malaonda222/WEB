/*Creiamo un componente che:
Usa useState per gestire una lista di utenti.
Usa useEffect per recuperare i dati da un'API fittizia (simuleremo un 
fetch), quindi quando la pagina viene caricata, i dati vengono 
automaticamente caricati in un array di utenti.
Visualizzerà una lista di utenti, con la possibilità di "aggiornare" 
o "rimuovere" un utente.*/

import React, { useState, useEffect } from "react";

// simuliamo un endpoint fittizio 
const API_URL = "https://jsonplaceholder.typicode.com/users";

const FetchUsers = () => {
    // stato per gli utenti
    const[userList, setUserList] = useState([])
    const[loading, setLoading] = useState(true)

    // funzione per recuperare i dati tramite fetch
    const getData = async () => {
        try {
            const response = await fetch(API_URL) 
            if (!response.ok) {
                throw new Error("Errore nel recupero dei dati!")
            }
            const data = await response.json();
            setUserList(data);
            setLoading(false)
        }catch(error){
            console.error("Errore:", error)
            setLoading(false)
        }
        }

    // useEffect per chiamare API quando il componente si monta
    useEffect (() => {
        getData() /*chiama la funzione di fetch al montaggio del componente*/
    }, []); /*useEffect verrà eseguito solo al primo render []*/
    
    const rimuovi = (id) => {
        setUserList(userList.filter((utente) => utente.id !== id));
    };

    const aggiungi = (utente) => {
        setUserList([...userList, utente]); 
    };
    
    return (
        <div>
            <h3>Lista degli utenti</h3>

            {loading ? (
                <p>Caricamento...</p>
            ) : (
                <ul>
                    {userList.map((utente) => {
                        <li key={utente.id}>
                            {utente.name}{" "}
                            <button onClick={() => rimuovi(utente.id)}>Rimuovi utente</button>
                        </li>
                    })}
                </ul>
            )}

            <button onClick = {() => {
                aggiungi({id: Date.now(), name: "Nuovo Utente"})
            }}>Aggiunti Utente 
            </button>
        </div>
    );
};

export default FetchUsers;
