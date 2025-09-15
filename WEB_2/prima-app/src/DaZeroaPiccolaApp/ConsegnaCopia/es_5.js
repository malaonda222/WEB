import React from 'react'

const CampoRicerca = () => {
    const [testoRicerca, settestoRicerca] = useState("");

    return (
        <div>
            <input 
            type="text"
            value={testoRicerca}
            onChange={(e)=>settestoRicerca(e.target.value)}
            className="form-control"
            placeholder= "Cerca...">
            </input>

            <p>Stai cercando: {testoRicerca}</p>
        </div>
    );
};

export default CampoRicerca;