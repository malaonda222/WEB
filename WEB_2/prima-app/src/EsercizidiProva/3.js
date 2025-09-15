/*Crea un componente TabellaStudenti che riceve un array di studenti.
Il componente deve mostrare una tabella <table> con:
intestazione: Nome e Voto
una riga per ogni studente, usando .map()
ogni riga <tr> deve avere una key basata su id*/

import React from 'react'


const TabellaStudenti = () => {
    const studenti = [
        { id: 1, nome: "Alice", voto: 28 },
        { id: 2, nome: "Bob", voto: 22 },
        { id: 3, nome: "Carla", voto: 30 }
    ];
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Voto</th>
                        <th>Esito</th>
                    </tr>
                </thead>
                <tbody>
                    {studenti.map((studente) => (
                        <tr key={studente.id}
                            style={{backgroundColor: studente.voto >= 18 ? "#d4edda" : "#f8d7da"}}
                        >
                            
                            <td>{studente.nome}</td>
                            <td>{studente.voto}</td>
                            <td>{studente.voto >= 18 ? "Promosso" : "Bocciato"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default TabellaStudenti;