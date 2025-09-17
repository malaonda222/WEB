import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCrud from "./UserCrud";
import Saluto from "./EserciziEstate/esercizio1/Saluto";
import UserCard from "./EserciziEstate/esercizio2/CardUtente.jsx";
import MenuRistorante from "./EserciziEstate/esercizio3/MenuRistorante.jsx";
import Termostato from "./EserciziEstate/esercizio4/Termostato.jsx";

function App() {
  // const [count, setCount] = useState(0)
  const persone = [
    {
      nome: "Roberto",
      email: "rob@rob.it",
      imgUrl: "https://placehold.co/600x400",
    },
    {
      nome: "Gino",
      email: "gin@gin.it",
      imgUrl: "https://placehold.co/600x400",
    },
    {
      nome: "Ugo",
      email: "ugo@ugo.it",
      imgUrl: "https://placehold.co/600x400",
    },
  ];
  return (
    // <MenuRistorante></MenuRistorante>
    <Termostato></Termostato>
  )
    // <UserCrud></UserCrud>
    // <Saluto></Saluto>
    // <>
    //   <UserCard
    //     nome="Paolo"
    //     email="paolo@paolo.it"
    //     imgUrl="https://placehold.co/600x400"
    //   ></UserCard>

    //   <UserCard {...persone[0]}></UserCard>
    //   <div className="row">
    //     {persone.map((p) => {
    //       return (
    //         <div className="col">
    //           <UserCard {...p}></UserCard>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  // );
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App;
