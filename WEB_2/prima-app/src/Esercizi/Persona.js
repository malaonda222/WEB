import React from 'react'

const Persona = ({nome, cognome, eta}) => {
  return (
    <>
    <div>{nome} {cognome} di anni {eta}</div>
    </>

  )
}

export default Persona