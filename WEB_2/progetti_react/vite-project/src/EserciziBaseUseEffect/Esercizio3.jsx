/*Obiettivo: Usa useEffect per fare un fetch a un'API e gestire i dati.
Crea un componente che recupera una lista di utenti da https://jsonplaceholder.typicode.com/users

Gestisci 3 stati:

users per memorizzare la lista di utenti.
loading per sapere se i dati sono ancora in fase di caricamento.
error per memorizzare eventuali errori durante il fetch.

Usa useEffect per:
Eseguire il fetch dei dati quando il componente viene montato.
Impostare loading a true prima del fetch e a false quando i dati sono caricati.
Gestire eventuali errori e visualizzarli.

Suggerimento: Ricorda che useEffect viene eseguito solo al montaggio (se passi 
un array vuoto [] come dipendenza). Puoi usare async/await dentro il useEffect 
per gestire il fetch.*/


import React, { useState, useEffect } from "react";


const url = "https://jsonplaceholder.typicode.com/users" 
const Esercizio3 = () => {

    const[listaUtenti, setListaUtenti] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Errore durante il fetch")
        }
        const data = await response.json()
        setListaUtenti(data)
        setLoading(false)

        }catch (error){
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) return <p>Caricamento...</p>
    if(error) return <p>Errore: {error}</p>

     
    return (
        <div>
            <h2>Lista utenti</h2>
            <ul>
            {listaUtenti.map((utente) => {
                <li key={utente.id}>{utente.name}</li>
            })}
            </ul>
        </div>
    )
}