import React from "react";

/**
 * Stores the display of each to do item in the unordered list
 *
 * @param {string} todo The description of the todo item
 * @param {number} index The current index of the todo item
 * @param {React.Dispatch<React.SetStateAction<never[]>>} setTodos The setter function for setting the todos state
 * @returns {ReactNode} An li JSX element
 */
const ToDoItem = ({ todo, setTodos, index }) => {
    return (
        <li>
            <span>{todo}</span>
            {/* To let user freely delete each todo when needed */}
            <button
                onClick={() => {
                    setTodos((prev) => {
                        // Create a copy of the previous todos
                        const newTodos = [...prev];
                        // Remove the todo item
                        prev.splice(index, 1);
                        // Return the new todo list with removed item
                        return newTodos;
                    });
                }}
            >
                Delete
            </button>
        </li>
    );
};

export default ToDoItem;
