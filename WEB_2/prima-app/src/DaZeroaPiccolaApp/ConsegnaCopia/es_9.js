import React, {useState, useEffect} from 'react'

const ModuloContatti = () => {
    const [datiForm, setDatiForm] = useState({
        nome: "",
        email: "",
        messaggio: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDatiForm(prev => ({
            ...prev,
            [name]: value,
        }))
        return{
            ...setDatiForm
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datiForm);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="nome"
            value={datiForm.nome}
            onChange={handleChange}
            placeholder="Inserisci il tuo nome: "
            />

            <input
            type="text"
            name="email"
            value={datiForm.email}
            onChange={handleChange}
            placeholder="Inserisci la tua mail: "
            />

            <textarea
            name="messaggio"
            value={datiForm.messaggio}
            onChange={handleChange}
            placeholder="Inserisci un messaggio: "
            />

            <button type="submit">Invia</button>
        </form>
    );
};

export default ModuloContatti;