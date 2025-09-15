import React, { useState } from "react";

const MessaggioSegreto = () => {
    const [messaggioSegreto, setMessaggioSegreto] = useState(false)

    return (
        <>
        <button onClick={() => setMessaggioSegreto(!messaggioSegreto)}>
            {messaggioSegreto ? "Nascondi messaggio" : "Mostra messaggio"}
        </button>

            {messaggioSegreto && <p>Messaggio segreto: App.js</p>}
        </>
    );
};

export default MessaggioSegreto;