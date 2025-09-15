import './App.css';
// import Saluto from './esercizio_1/Saluto';
// import CardUtente from './esercizio_2/ComponentePadre';
// import MenuRistorante from './esercizio_3/MenuRistorante';
// import Termostato from './esercizio_4/Termostato';
import BlogApp from './esercizio_10/BlogApp';
// import CampoRicerca from './esercizio_5/CampoRicerca';
// import ComponentePadre from './esercizio_6/ComponentePadre';
// import Componente1 from './Componente1';
// import Clock from './Clock';
// import Persona from './Esercizi/Persona';
// import { persone } from './dati/dati';
// import Tabellina from './Esercizi/Tabellina';
// import StampaNumeri from './Esercizi/StampaNumeri';
// import Range0_20 from './Esercizi/Range0_20';
// import Componente2 from './Esercizi/Componente2';
// import Componente3 from './Esercizi/Componente3';
// import Biblioteca from './Esercizi/Biblioteca';
// import ProfiloUtente from './Esercizi_argomentiSlide2.py/ProfiloUtente';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from './Form';
// import FormUseRef from './FormUseRef';
// import UseEffect from './useEffect';
// import Cleanup from './Cleanup';
// import ListaUtenti from './Esercizi_argomentiSlide2.py/ListaUtenti';
// import LoginForm from './Esercizi/LoginForm';
// import Slide5 from './Esercizi/Slide5';

// import Contatore from './Contatore';
// import { utenti } from './dati/Utenti';
// import StampaUtenti from './Esercizi/StampaUtenti';

// const persone2 = [{
//   id: 10,
//   nome: "Lisa",
//   cognome: "Enol",
//   eta: "30"
// },{
//   id: 11,
//   nome: "Mario",
//   cognome: "Rossi",
//   eta: "45"
// }];


// const animali = [{
//   id: 22,
//   nome: "Mira",
//   razza: "Persiano"
// },{
//   id: 23,
//   nome: "Otto",
//   razza: "Birmano"
// }]

// const invio = (nominativo) => {
//   alert(nominativo + "Sto inviando i dati");
// }

// const stampaNome=(nome)=>{
//     alert(nome)
//   }





function App() {

  
  // let nome="Roberto";

  // const data=new Date();
  // const clicca=(nome, cognome)=>{

  //   alert("Cliccato da "+ nome+" "+cognome);
  // }
  // return (
  //   <div className="App">
  //     <h1>Prima App React {nome}</h1>
  //     <Persona nome={persone[0].nome} cognome={persone[0].cognome} eta={persone[0].eta}></Persona>
  //     <Persona nome={persone[1].nome} cognome={persone[1].cognome} eta={persone[1].eta}></Persona>
  //     <Persona nome={persone[2].nome} cognome={persone[2].cognome} eta={persone[2].eta}></Persona>
      
  //     {persone.map((persona) => {
  //       return <Persona key={persona.id}{...persona}></Persona>})}
      
  //     {persone.map((persona) => {
  //       return <Componente1 key={persona.id}{...persona} onCliccami></Componente1>
  //     })}

  //     <Tabellina num="3"></Tabellina>
      
  //     <StampaNumeri></StampaNumeri>

  //     <Range0_20></Range0_20>

  //     <h1>Componente Principale</h1>
  //     <Componente2 nome="Alice" cognome="Bimbi" eta="39"></Componente2>
  //     <Componente2 nome="prova 2" cognome="Din" eta="22"/>
  //     <Componente2 nome="prova 3" cognome="Ricci" eta="45"/>

  //     {
  //       persone2.map(pers => {
  //         return <p key={pers.id} onClick={ () => invio(pers.nome)}>{pers.cognome}</p>
  //       })
  //     }

  //     {
  //       animali.map((anim, index) => {
  //         return <p key={index}>{anim.nome} {anim.razza}</p>
  //       })
  //     }
  //     <button onClick={()=>{clicca("Rob", "Del")}} className="btn btn-primary">Cliccami</button>
  //     <br></br>
  //     <br></br>
  //     <button onClick={invio}>INVIA</button>

  //     <h2>{data.toLocaleDateString()+" "+ data.toLocaleTimeString()}</h2>
  //     <Clock timezone="-6" country="USA"></Clock>
  //     <Clock timezone="0" country="Italy"></Clock>
  //     <Clock timezone="7" country="Japan"></Clock>

  //     <>
  //     <Componente3 onStampa={stampaNome}></Componente3>
  //     </>

  //     <div>
  //     <Biblioteca/>
  //     </div>
  
    
    
    
    /*function dividiGruppi(array) {
      const gruppi = [];
      for (let i = 0; i < array.length; i += 3) {
        gruppi.push(array.slice(i, i + 3));
      }
      return gruppi;
    }

    const gruppiUtenti = dividiGruppi(utenti)*/

  // return (<LoginForm></LoginForm>)
    
   /*
    return (
      <>
      // <div className='container mt-4'>
      //   {gruppiUtenti.map((gruppo) => (
      //     <div className='row mb-4' key={gruppo.map(u => u.id).join('-')}>
      //       {gruppo.map((utente) => (
      //         <div className='col-md-4' key={utente.id}>
      //           <ProfiloUtente utente={utente}/>
      //         </div>
      //       ))}
      //     </div> 
      // ))}
      // <Form></Form>
      // <FormUseRef></FormUseRef>
      // <useEffect></useEffect>
      // <Cleanup></Cleanup>
    
      <LoginForm/>
      </>
)
    // return (<Contatore></Contatore>)
    */
  // return <Slide5/>

  // let saluto = "ciao";
  // const cambioSaluto = () => {
  //   saluto = "arrivederci";
  //   console.log(saluto);
  // }

  // return (
  //   <div className='App'>
  //     <h1>Componente Principale</h1>;
  //     <h2>{saluto}</h2>;
  //     <button onClick={cambioSaluto}>Cambia</button>
  //   </div>
  // ); 
    
    
  //   <div>
  //     <StampaUtenti utenti = {utenti} />
  //   </div>
  // );
  return (
    // <Saluto/>
    // <CardUtente/>
    // <MenuRistorante/>
    // <Termostato/>
    <BlogApp/>
    // <CampoRicerca/>
    // <ComponentePadre></ComponentePadre>
  )
}
export default App;