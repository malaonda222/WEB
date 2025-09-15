import React, { useState, useEffect } from "react";

const AggiornaTitolo = () => {
    const [nome,setNome] = useState("");

    useEffect(() => {
        if(nome === ""){
            document.title = "Benvenuto!";
        }else{
            document.title = `Ciao, ${nome}!`
        }
        
        console.log('Il nome è stato cambiato', nome);
    }, [nome]);

    return (
        <div style={{padding: "20px"}}>
            <h1>useEffect {nome}</h1>
            <input
                type="text" 
                value={nome} 
                onChange={(e)=>setNome(e.target.value)} 
                className="form-control"
                name="nome"
                placeholder="Inserisci un valore: ">
            </input>
        </div>
    );
};

export default AggiornaTitolo;
