import React from 'react'

const ProfiloUtente = ({utente}) => {
    return (
        <div className="card h-100">
            <div className="card-header text-center">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white w-bold" style={{width:"50px", height: "50px", fontsize: "16px"}}>
                    {utente.nome.charAt(0)} {utente.cognome.charAt(0)}
                </div>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">
                    {utente.nome} {utente.cognome}
                </h5>
                <div className="mb-2">
                    <span className="badge bg-secondary">
                        {utente.eta}
                    </span>
                </div>
                <p className="card-text text-primary fw-semibold small">
                    {utente.professione}
                </p>
                <p className="card-text small">
                    {utente.email ? utente.email: 'Email mancante'}
                </p>   
            </div>
        </div>
    );
};
export default ProfiloUtente 