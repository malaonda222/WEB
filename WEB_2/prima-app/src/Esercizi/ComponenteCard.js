import React from 'react';

const Card = ({ titolo, descrizione, isColored }) => {
  const cardStyle = {
    border: '1px solid gray',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: isColored ? 'black' : 'white',
    color: isColored ? 'white' : 'black',
  };

  return (
    <div style={cardStyle}>
      <h3>{titolo}</h3>
      <p>{descrizione}</p>
    </div>
  );
};

export default Card;