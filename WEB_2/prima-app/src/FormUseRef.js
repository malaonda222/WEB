import React, {useState} from 'react'

const FormUseRef = () => {
    const nomeRef=useRef(null);
    const cognomeRef=useRef(null);

    const[persona, setPersona]=useState({})
    const [persone, setPersone]=useState([])

    const gestioneDati=(e)=>{
        e.preventDefault();
        const nome=nomeRef.current.value;
        const cognome=cognomeRef.current.value;
        if (nome && cognome){
            setPersone([
                ...persone,
                {
                    nome, 
                    cognome
                }
            ])
        }else{
            alert("Compila tutti i campi!")
        } 

    }
    return (
        <div className="container border py-3" onSubmit={gestioneDati}>
            <form className="row g-3">
                <div className="col-md-6">
                <label htmlFor="inputNome" className="form-label">Nome</label>
                <input type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}} className="form-control" id="inputNome" name="nome"/>
                </div>
            <div className="col-md-6">
                <label htmlFor="inputCognome" className="form-label">Cognome</label>
                <input type="text" value={cognome} onChange={(e)=>{setCognome(e.target.value)}} className="form-control" id="inputCognome" name="cognome" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Invia</button>
            </div>
        </form>
        <div>
            {
            persone.map((p,index)=>{
                return (<h3 key={index}>{p.nome} {p.cognome}</h3>)
            })
}
        </div>
    </div>
    )
}

export default FormUseRef