import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({tasks, onDeleteTask}) => {
    return (
        <ul className="list-group">
            {
                tasks.map((t) => {
                    return(
                        <TodoItem 
                        key={t.id} 
                        task={t} 
                        handleDeleteTask={onDeleteTask}
                        />)
            })
        }
        </ul>
    )
}

export default TodoList