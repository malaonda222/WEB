/*Crea un componente ListaProdotti che riceve un array di prodotti.
Il componente deve:
Visualizzare la lista dei prodotti usando .map()
Mostrare nome e prezzo di ogni prodotto
Usare key corretta per ogni elemento mappato (basata su id)*/

import React from 'react'

const ListaProdotti = () => {
    const prodotti = [
        { id: 1, nome: "Penna", prezzo: 1.2 },
        { id: 2, nome: "Quaderno", prezzo: 3.5 },
        { id: 3, nome: "Zaino", prezzo: 25.0 }
    ];

    return (
        <div>
            {prodotti.map(prodotto => (
                <div key={prodotto.id}>
                    <div>
                        id: {prodotto.id}, nome: {prodotto.nome}, prezzo: {prodotto.prezzo}
                    </div>
                </div>
            ))}
        </div>
        );
    };


export default ListaProdotti;