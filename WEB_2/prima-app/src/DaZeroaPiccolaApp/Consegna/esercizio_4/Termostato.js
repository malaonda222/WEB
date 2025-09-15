import { useState } from "react";

const Termostato = () => {
    const [temperatura, setTemperatura] = useState(27)
    const aumenta = () => {
        setTemperatura(oldTemperatura => oldTemperatura + 1);
    };
    const diminuisci = () => {
        setTemperatura(oldTemperatura => oldTemperatura - 1);
    };
    return (
        <div>
            <h1>Temperatura: {temperatura}°C</h1>
            <button onClick={aumenta} className="btn btn-primary">Aumenta</button>
            <button onClick={diminuisci} className="btn btn-secondary">Diminuisci</button>
        </div>
    );
};

export default Termostato

