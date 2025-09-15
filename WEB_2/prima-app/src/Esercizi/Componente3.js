import React from 'react'

const Componente3 = ({onStampa}) => {
  return (
    <div>
        <h2>Componente3</h2>
        <button onClick={()=>onStampa('pippo')}>Clicca</button>
    </div> 
)
}

export default Componente3