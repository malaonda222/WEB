import React from 'react'

const StampaNumeri = () => {
    const lista = [];
    for(let i=0; i<=10; i++){
        lista.push(i);
    }
  return (
    <div>StampaNumeri
        {lista.map(i =>(
        <div key={i}>
            {i} </div>
        ))}
    </div>
  )
}

export default StampaNumeri