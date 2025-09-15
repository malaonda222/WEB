import React, { useState } from 'react'

const Contatore = () => {
    const [count, setCount] = useState(0);

    const aggiungi = () => {
        setCount(oldCount => oldCount + 1);
    };
    const diminuisci = () => {
        setCount(oldCount => oldCount - 1); 
    }; 

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center text-center'>
            
            <div className='card' style={{width: "18rem"}}>
            <div>{count}</div>
            <button onClick={diminuisci} className='btn btn-danger'>Diminuisci</button>
            <button onClick={aggiungi} className='btn btn-success'>Aggiungi</button>
            </div>
        </div>
        </div>
    )
    
};

export default Contatore