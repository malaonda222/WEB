import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({tasks, handleDeleteTask, handleToggleTask}) => {
     return (
        <ul>
            {tasks.map((task) => (
                <TodoItem
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleToggleTask={handleToggleTask}
                />
            ))}
        </ul>
        );
    };

    export default TodoList;