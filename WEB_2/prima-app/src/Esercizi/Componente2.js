import React from 'react'

const Componente2 = (props) => {

    const anni = "27";

  return (
    <div>
        Il secondo componente è di {props.nome} {props.cognome} ed è stato realizzato a {props.eta} anni.
        <Anagrafica></Anagrafica>
        <Messaggio></Messaggio>
    </div>
  )
}

const Anagrafica = () => {
    return (
        <h2>Il mio nome è Riccardo</h2>
    )
}

const Messaggio = (props) => {
    return (
        <div>{props.children}</div>
    )
}

export default Componente2