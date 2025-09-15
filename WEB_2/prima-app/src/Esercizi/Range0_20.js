import React from 'react'

const Range0_20 = () => {
    const lista2 = []
    for(let i=0; i<=20; i+=2){
        lista2.push(i);
    }
  return (
    <div>Range0_20
        {lista2.map(i =>(
        <div key={i}>
            {i} </div>
        ))}
    </div>
  )
}

export default Range0_20