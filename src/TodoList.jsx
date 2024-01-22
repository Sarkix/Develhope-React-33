import React, { useState } from "react";
import styles from "./todolist.module.scss";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            // El if que he añadido por mi cuenta es para que no se añadan todos vacíos.
            setTodos([...todos, newTodo]);
            setNewTodo(""); // Limpiar el input después de agregar un Todo.
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleResetTodos = () => {
        setTodos([]);
    };

    return (
        <div className={styles.todoList}>
            {" "}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                className={styles.input}
            />
            <button onClick={handleAddTodo} className={styles.button}>
                Add Todo
            </button>
            <button onClick={handleResetTodos} className={styles.button}>
                Reset Todos
            </button>
        </div>
    );
}

export default TodoList;
