import React from 'react'
// import {piatti} from './piatti'

piatti = [{
    id: "1",
    nome: "parmigiana",
    prezzo: "8"
  },{
    id: "2",
    nome: "insalatona",
    prezzo: "7"
  },{
    id: "3",
    nome: "granita",
    prezzo: "3"
  }]

const MenuRistorante = () => {
    return (
        <ul>
            {piatti.map((piatto) => (
                <li key={piatto.id}>
                    nome: {piatto.nome}, prezzo {piatto.prezzo} euro
                </li>
            ))}
        </ul>
    );
}; 




export default MenuRistorante;