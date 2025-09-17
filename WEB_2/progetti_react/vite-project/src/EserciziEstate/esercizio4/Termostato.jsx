import React, { useState } from "react";

const Termostato = () => {
  const [termo, setTermo] = useState(20);
  const aumenta = () => {
    setTimeout(() => {
      setTermo((termo) => termo + 1);
    }, 1000);
  };

  return (
    <>
      <div>La temperatura è {termo}</div>
      <button onClick={() => setTermo(termo - 1)}>Diminuisci</button>
      <button onClick={aumenta}>Aumenta</button>
    </>
  );
};
export default Termostato;
