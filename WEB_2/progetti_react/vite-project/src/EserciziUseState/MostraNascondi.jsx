/*Obiettivo: Un bottone che mostra/nasconde un'immagine.

Requisiti:
Un bottone con scritto "Mostra Immagine" o "Nascondi Immagine".
Utilizzare useState con valore booleano (true/false).
Quando clicchi sul bottone, l'immagine appare o scompare.
Per l'immagine, puoi usare una foto di esempio (ad esempio un link a un'immagine online).

Concetti: boolean state, conditional rendering*/


import React, { useState } from "react";

const MostraNascondi = () => {
    
    const[mostra, setMostra] = useState(true)
    const link = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.altrasoluzione.com%2Fblog%2Fsiti-per-scaricare-immagini-gratis-legalmente&psig=AOvVaw3_NHruIcBXmV5Q__xGuV5g&ust=1761470938175000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD2wOCCv5ADFQAAAAAdAAAAABAE"

    return (
        <div>
            <button onClick={() => setMostra(!mostra)}>
                {mostra ? "Nascondi" : "Mostra"}
            </button>
            {mostra && <img src={link} alt="Immagine"/>}
        </div>
    )
}

export default MostraNascondi



// const MostraNascondi1 = () => {

//     const[mostra, setMostra] = useState(true)
//     const link = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.altrasoluzione.com%2Fblog%2Fsiti-per-scaricare-immagini-gratis-legalmente&psig=AOvVaw3_NHruIcBXmV5Q__xGuV5g&ust=1761470938175000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD2wOCCv5ADFQAAAAAdAAAAABAE"

//     const toggleMostra = () => {
//         setMostra(!mostra)
//     }

//     return (
//         <div>
//             <button onClick={{toggleMostra}}>
//                 {mostra ? "Nascondi" : "Mostra"}
//             </button>
//             {mostra && <p>{link}</p>}
//         </div>
//     )
// }

// export default MostraNascondi1 

