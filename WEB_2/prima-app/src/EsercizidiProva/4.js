/*Usa uno stato tasks che è un array di oggetti.
Visualizza la lista delle attività in un elenco <ul>, usando .map() per creare una <li> per ogni task.
Ogni attività deve mostrare:
Il testo
Uno stile diverso se è completata (es. testo barrato)
Aggiungi un pulsante accanto a ogni attività che permette di cambiare lo stato completato (toggle).*/


import React from 'react'

const ListaToDo = () => {
    const [tasks, setTasks] = useState([
        { id: 1, testo: "Fare la spesa", completato: false },
        { id: 2, testo: "Pulire la casa", completato: true },
        { id: 3, testo: "Studiare React", completato: false },
    ]);
    
    const toggleTask=(id)=>{
        const nuoviTasks = tasks.map((task) => 
            task.id === id ? {...task, completato: !task.completato}: task
        );
        setTasks(nuoviTasks);
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li 
                        key={task.id}
                        style={{textDecoration: task.completato ? 'line-through' : 'none' }}
                    >
                        <div>{task.testo}</div>
                        <button onClick={() => toggleTask(task.id)} className='btn btn-dark'>Cambia Stato</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaToDo;


