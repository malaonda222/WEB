import React from 'react'

const useEffect = () => {
  const [count,setCount]=useState();

    useEffect(() => {
        console.log("sono dentro lo useEffect")
        if(count<1){
        document.title="Valore count"
        }else{
          document.title="è successo qualcosa " +count 
        }
        return(()=>{console.log("Cleanup function")})
    },[])
        console.log("sono fuori lo useEffect")
  return (
    <>
    <div> EsempioUseEffect {count}</div>
    <button onClick={()=>{setCount(count+1)}} className='btn btn-danger'>
      Aumenta
    </button>
    </>
  )
}

export default useEffect
