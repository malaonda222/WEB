import { utenti } from "../dati/Utenti";
import React from 'react'


const StampaUtenti = ({utenti}) => {
    return (
        <div>
            {utenti.map(u => (
                <div key={u.id}>
                    <p>ID: {u.id}</p>
                    <p>Nome: {u.nome}</p>
                    <p>Cognome: {u.cognome}</p>
                    <p>Età: {u.eta}</p>
                </div>
            ))}
        </div>
    );
};

export default StampaUtenti;