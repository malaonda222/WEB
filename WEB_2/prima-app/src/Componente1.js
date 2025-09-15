import React from "react";
  
const Componente1 = ({ nome, cognome, eta }) => {
  const DivStyle = {
            color: "red",
            fontWeight: "800",
            border: "1px #000 solid",
            margin: "15px",
            padding: "15px",
            backgroundColor: "yellow"
          }
  return (
    <>
      <div
        style={DivStyle}
      >
        {nome} {cognome} di anni {eta}
        <Anagrafica></Anagrafica>
        <Messaggio></Messaggio>
      </div>
      <footer></footer>
    </>
  );
};

const Anagrafica = () => {
  return <div>Anagrafica</div>;
};

const Messaggio = () => {
  return <div>Messaggio</div>;
};

export default Componente1;
