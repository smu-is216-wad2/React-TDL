import { useState } from "react";
import "./App.css";
import ToDoItem from "./TodoItem";

function App() {
    // Stores the todo inside the input
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [isShow, setIsShow] = useState(true);

    return (
        <>
            {/* The input for user to enter todo item */}
            <input onChange={(e) => setInput(e.target.value)} />
            {/* The button for user to add the todo to the front of the array */}
            <button onClick={() => setTodos([input, ...todos])}>
                Add Todo
            </button>
            <h2>Todos</h2>
            {/* The checkbox for user to toggle between showing the todo list or hide it */}
            <input
                type="checkbox"
                checked={isShow}
                onChange={() => setIsShow((prev) => !prev)}
            />
            <span>Show Todos</span>
            <ul>
                {/* Renders each todo as an li, will be hidden if the isShow is set to false! */}
                {isShow &&
                    todos.map((todo, index) => (
                        <ToDoItem key={index} {...{ todo, setTodos, index }} />
                        // Logically equivalent to

                        // <ToDoItem
                        //     key={index}
                        //     todo={todo}
                        //     setTodos={setTodos}
                        //     index={index}
                        // />
                    ))}
            </ul>
        </>
    );
}

export default App;
