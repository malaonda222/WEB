import React from 'react'
import piatti from './piatti'


const MenuRistorante = () => {
  return (
    <ul>
        {
            piatti.map((p) => {
              return(
                <li 
                  key={p.id} 
                  className='list-group-item d-flex justify-content-between'
                >
                  <span>{p.nome}</span>
                  <span className='badge bg-success'>{p.prezzo}</span>
                </li>
              );
            })
        }
    </ul>
  )
}

export default MenuRistorante;