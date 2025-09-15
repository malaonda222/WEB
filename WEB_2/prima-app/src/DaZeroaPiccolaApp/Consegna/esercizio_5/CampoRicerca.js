import React from "react";
import { useState } from "react";

const CampoRicerca = () => {
    const [testoRicerca, setTestoRicerca] = useState("");

    return(
    <div>
        <input 
        type="text" 
        value={testoRicerca} 
        onChange={(e)=>setTestoRicerca(e.target.value)} className="form-control" 
        name="testo" 
        placeholder="Cerca...">
        </input>

        <p>Stai cercando: {testoRicerca}</p>
    </div>
    );
};

export default CampoRicerca;