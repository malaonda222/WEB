import { useState } from "react"

const appuntamenti = [{
    id: 4, 
    nome: "Rebecca",
    stato: "lorem ipsum"
},{
    id: 5, 
    nome: "Rachele",
    stato: "carpe diem"
},{
    id: 8, 
    nome: "Viola",
    stato: "serendipity"
}]

const Appuntamenti = () => {
    const [appuntamenti, setAppuntamenti] = useState(appuntamenti)

    const aggiungiAppuntamento = () => {
        const nuovoAppuntamento = {
            id: Date.now(),
            nome: "Davide",
            stato: "Nuovo"
        }
        setAppuntamenti([...appuntamenti + nuovoAppuntamento]);
    };

    const eliminaAppuntamento = () => {
        setAppuntamenti(appuntamenti.alice(0, -1));
    };

    return (
        <div>
            <ul>
            {appuntamenti.map((appuntamento) => (
                <li key={appuntamento.id}>
                    Nome: {appuntamento.nome} - Stato: {appuntamento.stato}
                </li>
            ))}
            </ul>
            <button onClick={aggiungiAppuntamento}>Aggiungi appuntamento</button>
            <button onClick={eliminaAppuntamento}>Elimina appuntamento</button>
        </div>
    );
};

export default Appuntamenti;