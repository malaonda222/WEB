import React, { useRef } from "react";

const ModuloContatti = () => {
    const nomeRef=useRef(null);
    const cognomeRef=useRef(null);
    const messaggioRef=useRef(null);
}

    const gestioneContatti=(e)=>{
        e.preventDefault();

        const nome=nomeRef.current.value;
        const cognome=cognomeRef.current.value;
        const messaggio=messaggioRef.current.value;

        if (nome && cognome && messaggio){
            console.log({
                nome,
                cognome,
                messaggio
            });
        }else{
            alert("Compila tutti i campi!")
        };
    };

    return (
        <div className="container border py-3">
        <form classname="row g-3" onSubmit={gestioneContatti}>
            <div classname="col-md-6">
                <label htmlFor="inputNome" className="form-label">Nome</label>
                <input 
                type="text" 
                value={form.nome} 
                id="inputName"
                className={nomeRef}
                onChange={(e)=>setForm(e.target.value)}
                name="nome"
                />
            </div>
            <div classname="col-md-6">
                <label htmlFor="inputCognome" className="form-label">Cognome</label>
                <input
                type="text"
                value={form.cognome}
                id="inputCognome"
                className={cognomeRef}
                onChange={(e)=>setForm(e.target.value)}
                name="cognome"
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputMessaggio" classname="form-label">Messaggio</label>
                <textarea 
                type="text"
                value={form.messaggio}
                id="inputMessaggio"
                className={messaggioRef}
                onChange={(e)=>setForm(e.target.value)}
                name="messaggio"
                ></textarea>
            </div>
            <div classname="col-12">
                <button type="submit" className="butn-btn-primary">Invia</button>
            </div>
        </form>
        </div>
    );

export default ModuloContatti;