import React from 'react' 
import { useState } from 'react'

const Termostato = () => {
    const [temperatura, setTemperatura] = useState(27);

    const aumenta = () => {
        setTemperatura(oldTemperatura => oldTemperatura + 1)
    }

    const diminuisci = () => {
        setTemperatura(oldTemperatura => oldTemperatura - 1)
    }

    return (
        <div>
            <h1>Temperatura attuale: {temperatura}°C</h1>
            <button onClick={aumenta} className="btn btn-primary">AUMENTA</button>
            <button onClick={diminuisci} className="btn btn-secondary">DIMINUISCI</button>
        </div>
    );   
};

export default Termostato;
