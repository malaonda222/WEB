/*Creiamo un componente che
Recupera una lista di prodotti da una fake API (useremo un servizio gratuito per simularla).
Mostra la lista di prodotti.
Gestisce lo stato di caricamento durante il recupero dei dati.
Mostra eventuali errori se qualcosa va storto.
Permette all'utente di rimuovere un prodotto dalla lista (simulando un'azione su API).

👩‍💻 Esercizio:
Obiettivi:
Usa useEffect per caricare i dati al caricamento della pagina
Usa fetch per recuperare i dati da un'API.
Gestisci gli errori usando try/catch per l'operazione di recupero dati.
Implementa la possibilità di rimuovere un prodotto dalla lista.*/


import React, { useState, useEffect } from "react";

const api_url = "https://fakestoreapi.com/products"


const fetchProduct = async () => {
    const response = await fetch(api_url)
    if(!response.ok) {
        throw new Error("Errore nel recupero dei dati!")
    }
    return await response.json()
}

const FetchProductList = () => {

    const[listaProdotti, setListaProdotti] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProduct();
                setListaProdotti(data);
                setIsLoading(false);
            }catch(error){
                setError(error.message);
                setIsLoading(false);
            }
        };
        getProducts();
    }, []);

    const removeProduct = (id) => {
        setListaProdotti(listaProdotti.filter((product) => (product.id !== id)))
    }

    return (
        <div>
            <h3>Lista Prodotti</h3>
            {isLoading && <p>Caricamento dei prodotti...</p>}

            {error && <p>Errore: {error}</p>}

            {!loading && !error && (
                <ul>
                    {listaProdotti.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <button onClick = {() => removeProduct(product.id)}>Rimuovi</button>
                        </li>
                    ))}
                </ul>   
            )}
        </div>
    );
};

export default FetchProductList