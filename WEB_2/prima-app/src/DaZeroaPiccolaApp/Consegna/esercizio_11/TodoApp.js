import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchTasks();
    }, []);
    
    const fetchTasks = async () => {
        setLoading(true);
        setError(null);
    try {
        const res = await fetch('http://localhost:3001/tasks');
        const data = await res.json();
        setTasks(data);
    } catch (error) {
        setError(err.message || "Errore durante il fetch");
    } finally {
        setLoading(false);
    }
    };

    const handleAddTask = async (nuovoTask) => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch('http://localhost:3001/tasks', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({title: nuovoTask, completed: false}),
            });
            if (!response.ok) {
                setError("Errore nella richiesta!");
                return;
            }
            await fetchTasks();
        }catch (error) {
            setError(error.message || "Errore sconosciuto")
        }finally {
            setLoading(false);
        }
    };
    
    const handleDeleteTask = async (taskId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
                method: "DELETE"
            });
            if(!response.ok) {
                setError("Errore nella richiesta!");
                return;
            }
            await fetchTasks(); 
        }catch (error) {
            setError(error.message || "Errore sconosciuto")
        }finally{
            setLoading(false);
        }
    };

    const handleToggleTask = async (task) => {
        setLoading(true);
        setError(null);
        
        try{
            const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({completed: !task.completed}),
            });
            if(!response.ok) {
                setError("Errore nella richiesta!");
                return;
            }
            await fetchTasks();
        }catch (error){
            setError(error.message || "Errore sconosciuto")
        }finally{
            setLoading(false);
        }
    };
    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm handleAddTask={handleAddTask}/>
            <TodoList
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
            loading={loading}
            error={error}
            />
        </div>
    );
};

