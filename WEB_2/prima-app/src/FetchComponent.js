import React, { useEffect, useState } from 'react'

const url="https://jsonplaceholder.typicode.com/"; 
const FetchComponent = () => {
    const [albums,setAlbums]=useState([]);

    const getData=async()=>{
        const response=await fetch(url);
        const albums=await response.json()              
        setAlbums(albums) 
    }
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(ris=>{
            setAlbums(ris)
        })
    },[])
  return (
    <div>
        {
            albums.map((a)=>{
                return(<h3>{a.title}</h3>)
            })
        }
    </div>
  )
}

export default FetchComponent


// await (async)
// oppure useEffect Promise gestione classica 