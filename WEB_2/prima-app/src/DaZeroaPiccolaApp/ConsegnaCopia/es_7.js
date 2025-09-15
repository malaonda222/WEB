import React, { useState, useEffect} from 'react'

const AggiornaTitolo = () => {
    const [nome, setNome] = useState("");

    useEffect(() => {
        if(!nome){
            document.title = "Benvenuto!"
        }else{
            document.title = `Ciao ${nome}`
        }
    }, [nome])


    return (
        <input
        type="text"
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
        placeholder="Inserisci il tuo nome: ">
        </input>
    );
};

export default AggiornaTitolo;
