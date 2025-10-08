import React, { useEffect, useState, createContext } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {
    API_URL, 
    fetchTasksService, 
    deleteTaskService,
    addTaskService, 
    toggleTaskService,
    updateTaskService,
} from "./api";


export const AppContext = createContext();

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        try {
            const data = await fetchTasksService();
            setTasks(data);
        }catch(errore){
            setError(e);
        }finally{
            setLoading(false);
        }
    };

    const deleteTask = async (id) => {
        await deleteTaskService(id);
        fetchTasks();
    };

    const addTask = async  (text) => {
        await addTaskService(text);
        fetchTasks();
        };
    };
    // addTask la chiamo quando clicco Inserisci 
    // inserendo una nuova task, viene inserito il task passato dal figlio e viene settato a False il completed

    const toggleTask= async (id, completed) => {
        await toggleTaskService(id, completed);
        fetchTasks();
    };
    
    const updateTask= async (id, text) => {
        await updateTaskService(id, text);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    if (loading) return <div className="alert alert-info">Sto caricando...</div>;
    if (error) return <div className="alert alert-danger">Errore: {error}</div>;

    return (
        <AppContext.Provider value={{tasks, loading, error, fetchTasks, addTask, deleteTask, toggleTask, updateTask}}>
        <div className="container m-4">
            <h1 className="mb-4">To Do List</h1>
            <TodoForm addTask={addTask}/>
            <TodoList /> 
        </div>
        </AppContext.Provider>
    );

export default TodoApp;