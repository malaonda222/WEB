import React, { useState } from "react";
import Saluto from "./esercizio1/Saluto";
import UserCard from "./esercizio2/CardUtente";
import MenuRistorante from "./esercizio3/MenuRistorante";
import Termostato from "./esercizio4/Termostato";


// creare un array con le voci di menu; prendere da bootstrap un menu; 
// i map diventeranno le voci del menu
// use state per la voce di menu corrente e quando si chiama l'oggetto viene chiamato il setItem
//  

const Menu = () => {
  const [item, setItem] = useState("");

  const renderContenuto = () => {
    switch (item) {
      case "Saluto":
        return <Saluto />;
      case "UserCard":
        return <UserCard />;
      case "MenuRistorante":
        return <MenuRistorante />;
      case "Termostato":
        return <Termostato />;
      default:
        return null;
    }
  };
  const tabs = ["Saluto", "UserCard", "MenuRistorante", "Termostato"];

  return (
    <div>
      <ul className="nav">
        {tabs.map((t) => (
          <li className="nav-item" key={t}>
            <button
              className={`nav-link ${item === t ? "attivo" : ""}`}
              onClick={() => setItem(t)}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
      <div className="contenuto">
        {renderContenuto()}
      </div>
    </div>
  );
}; 

export default Menu;

// inserire map
// mi creo i li e i pulsanti e sull'onclick gli faccio il set item di questo valore

// es. se clicco su Saluto, setitem diventa saluto
// ogni volta che cambia use state il componente viene smontato e rimontato

// funzione render condizionale -> dentro la funzione ci metto switch case che dice "item menu è saluto?" ritorna allora componente saluto
