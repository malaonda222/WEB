/*Obiettivo: Crea un timer countdown che parte da 10 secondi e si riduce di 1 ogni secondo. Quando il timer arriva a 0, deve fermarsi.

Requisiti:
Un titolo che dice "Timer Countdown"
useState per il valore del countdown
Un bottone per avviare il countdown
Un timer che decresce di 1 secondo alla volta
Concetti: gestione temporale con setInterval, aggiornamento dello stato*/ 

import React, { useState } from 'react'

const CountDown = () => {
    const[countdown, setCountdown] = useState(10);
    const[running, setRunning] = useState(false); 

    const startCountDown = () => {
        if (!running && countdown > 0) {
            setRunning(true);
            const intervalId = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown <= 1) {
                        clearInterval(intervalId);
                        return 0;
                }
                return prevCountdown - 1
                });
            }, 1000); 
        };
    }
    
    return (
        <div>
            <h3>Timer CountDown</h3>
            <div>{countdown} secondi</div>
            <button onClick={startCountDown} disabled={running}>
                {running ? 'Timer in corso...' : 'Avvia Timer Countdown'}
            </button>
        </div>
    )
  }
export default CountDown