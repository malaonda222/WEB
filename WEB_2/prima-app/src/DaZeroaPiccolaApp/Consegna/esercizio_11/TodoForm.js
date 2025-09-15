import React, { useState } from "react";
import TodoApp from "./TodoApp"

const TodoForm = ({handleAddTask}) => {
    const [input, setInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") return;
    
        handleAddTask(input);
        setInput("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Inserisci un nuovo task"
            />
            <button type="submit" className="btn btn-primary">Aggiungi</button>
        </form>
        );
};

export default TodoForm;