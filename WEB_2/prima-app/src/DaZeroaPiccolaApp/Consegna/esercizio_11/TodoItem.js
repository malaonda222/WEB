import React from "react";
import TodoApp from "./TodoApp"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoItem = ({task, handleDeleteTask, handleToggleTask}) => {
    if (task.completed) {
        console.log("Completato: ", task);
    }

    return (
        <li>
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task)}
            />
        <span style={{textDecoration: task.completed ? "line-through": "none"}}>
            {task.title}
        </span>
        <button onClick={() => handleDeleteTask(task.id)}>Elimina</button>
        </li>
    );
};

export default TodoItem;