import React, {useEffect, useState} from 'react'
import { posts } from '../dati/dati'
import Card from './ComponenteCard';

    
const Slide5 = () => {
  const[colour,setColour] = useState(false);
  const[show, setShow] = useState(true);
  const[cardColour, setCardColour] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = colour ? 'black' : 'white';
    document.body.style.color = colour ? 'white' : 'black';
  }, [colour]);

  return (
    <>
      <div className="container">
        <div className='row'>
          {show && posts.map((p) => (
            <div classname='col' key={p.id}>
            <Card
            titolo={p.titolo}
            descrizione={p.descrizione}
            isColored={cardColour}
            />
            </div>
          ))}
        </div>
    </div>

    <div style={{marginTop: '20px', textAlign: 'center'}}>
      <button onClick={() => setColour(!colour)}>
        Cambia Colore Pagina ({colour ? 'Chiaro' : 'Scuro'})
        </button>
      
      <button onClick={() => setCardColour(!cardColour)} style={{marginLeft: '10px'}}>
        Cambia Colore Card
      </button>

      <button onClick={() => setShow(!show)} style={{marginLeft: '10px'}}> 
        {show ? 'Nascondi' : 'Visualizza'} News 
      </button>

    </div>
    </>
    );
};


export default Slide5

