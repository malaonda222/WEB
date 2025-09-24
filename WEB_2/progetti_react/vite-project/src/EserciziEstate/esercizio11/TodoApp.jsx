import React, { useEffect, useState } from "react";


const API_URL = 'http://localhost:4000/tasks';

const TodoApp = () => {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if(!response.ok) throw new Error("Errore nella fetch")
            setTasks(data);
        }catch(errore){
            setError(e);
        }finally{
            setLoading(false);
        }
    };

    const deleteTask = async (id) => {
        await fetch(API_URL+"/"+id,{method:"DELETE"});
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks()
    }, [])


    return (
        <div className="container m-4">
            <h1 className="mb-4">To Do List</h1>
            <TodoForm/>
            <TodoList tasks={tasks} onDeleteTask={deleteTask}/> 
        </div>

    );
};

export default TodoApp;