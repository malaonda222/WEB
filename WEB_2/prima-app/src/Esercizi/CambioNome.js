import React, { useState } from 'react'

const CambioNome = () =>{
    
    const[nome,setNome] = useState("Roberto")
    const toggleName=()=>{
            if(nome=="Roberto"){
                setNome("Mario")
            }else{
                setNome("Roberto")
            };
    };

    return (<div>
        <h2>{nome}</h2>
        <button onClick={toggleName} className='btn btn-dark'>Cambia Nome</button>
    </div>)

}

export default CambioNome;