import React from 'react'

const MessaggioSegreto = () => {
    const [mostra, setMostra] = useState(false);

    return (
        <div>
            <button onClick={() => setMostra(!messaggio)}>
                {setMostra ? "Nascondi messaggio" : "Mostra messaggio"}
            </button>
            {mostra && <p>Messaggio segreto: Daje</p>}
        </div>
    )
}

export default MessaggioSegreto;