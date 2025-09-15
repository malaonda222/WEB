import React from 'react'
import { utenti } from '../dati/dati';
import ProfiloUtente from './ProfiloUtente';


const creagruppiDatre=(arr)=> {
    const gruppi=[];
    for(let i=0; i<arr.length;i+=3){
        gruppi.push(arr.slice(i,i+3))
    }
    return gruppi;
}

const ListaUtenti = () => {
    const righeUtenti=creagruppiDatre(utenti);
  return (
    <div className='container py-5'>
        {
            righeUtenti.map((riga,index)=>{
                return (
                    <div key={riga[0].id} className='row mb-4'>
                        {
                            riga.map((u)=>{
                                return (
                                    <div key={u.id} className='col-md-4'>
                                        <ProfiloUtente>utente={u}</ProfiloUtente>
                                    </div>
                                )
                            })
                        }
                    </div>
            )

            })
        }
    </div>
  )
}

export default ListaUtenti
