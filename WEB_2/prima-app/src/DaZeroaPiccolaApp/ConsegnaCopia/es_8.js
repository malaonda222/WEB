import React, {useState, useEffect} from 'react'

const GalleriaFoto = () => {
    const [foto, setFoto] = useState([]);
    const [staCaricando, setStaCaricando] = useState(true);
    const [errore, setErrore] = useState(null);
        
    useEffect(() => {
        async function prova(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
                if(response.ok){
                    const dati = await response.json()
                    setFoto(dati);
                    setStaCaricando(false);
                }else{
                    throw new Error("Errore nella risposta del server")
                }
            }catch(e){
                setErrore(e.message);
                setStaCaricando(false);
            }
        }
        prova();
    }, [])
};

    if(staCaricando === true){
        return<p>Caricamento...</p>
    };

    if(errore !== null){
        return<p>Errore</p>
    }
    
    return (
        <div>
            {foto.map((f) => (
                <div key={f.id}>
                <p>{f.title}</p>
                </div>
            ))};
        </div>
    );

export default GalleriaFoto
