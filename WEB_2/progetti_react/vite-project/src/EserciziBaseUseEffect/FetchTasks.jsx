/*Creare un componente che:
Recupera una lista di task (compiti) da una fake API.
Permette all'utente di aggiungere un nuovo task.
Segna un task come completato.
Rimuove un task dalla lista.
Gestisce errori e caricamento tramite lo stato.*/ 

import React, { useState, useEffect } from "react";

const api_url = "https://jsonplaceholder.typicode.com/todos"

const fetchTasks = async () => {
    const response = await fetch(api_url)
    if (!response.ok) {
        throw new Error("Errore nel caricamento dei dati")
    }
    return await response.json();
};


const TaskManager = () => {

    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data)
                setIsLoading(false);
            }catch(error){
                setError(error.message)
                setIsLoading(false)
            };
        };
        getTasks();
    }, []);

    const addTask = () => {
        if(newTask.trim() === "") return;
        const newTaskObj = {
            userId: 1, 
            id: tasks.length + 1,
            title: newTask,
            completed: false
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask("");
    }

    const toggleCompletion = (id) => {
        setTasks(
            tasks.map((task) => 
            task.id === id ? {...task, completed: !task.completed} : task)
        )
    };


    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    };

    return (
        <div>
            <h3>Gestione dei Tasks</h3>

            {isLoading && <p>Caricamento...</p>}

            {error && <p>Errore: {error}</p>}

            <input 
            type = "text"
            value = {newTask}
            onChange = {(e) => setNewTask(e.target.value)}
            placeholder = "Aggiungi un nuovo task"
            ></input>

            <button onClick = {addTask}>Aggiungi Task</button>

        <ul>
            {tasks.map((task) => {
                <li key={task.id}>
                <input 
                    type = "checkbox"
                    checked = {task.completed}
                    onChange = {() => toggleCompletion(task.id)}>
                </input>
            <div style = {{textDecoration: task.completed ? "line-through" : "none"}}> {task.title}</div>
            <button onClick = {() => removeTask(task.id)}>Rimuovi</button>
            </li>  
            })}
        </ul>
        </div>
    );
};

export default TaskManager