import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos?_limit=10";

const GalleriaFoto = () => {
    const [photos, setPhotos] = useState([]);
    const [staCaricando, setStaCaricando] = useState(true);
    const [errore, setErrore] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setStaCaricando(true);
        setErrore(null);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                setErrore("Errore nella richiesta!");
                setStaCaricando(false)
            }
            const data = await response.json();
            setPhotos(data);;
            setStaCaricando(false);
        } catch(err) {
            setErrore(err.message || "Errore sconosciuto");
        } finally {
            setStaCaricando(false)
        }
    };

    fetchData();
}, []); 

    if (staCaricando) {
        return <h2>Sta caricando...</h2>
    };

    if (errore) {
        return <h2>Attenzione c'è un errore!</h2>
    };

    return (
        <div>
            {photos.map((p)=> (
                <div key={p.id}>
                <p>{p.title}</p>
        </div>
        ))}
        </div>
    );
};

export default GalleriaFoto;