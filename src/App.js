import './App.css';
import {useState} from "react";
import ToDoForm from "./todoform";
import ToDo from "./todo";


function App() {
    const [todos, setTodos] = useState([])
    const addTask = (userInput) => {
     if(userInput){
    const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
    }
    setTodos([...todos,newItem])
}
    }
    const removeTask = () => {

    }
    const handleToggle = () => {

    }
    return (
        <div className="App">
            <header>
                <h1>Список задач: {todos.length}</h1>
            </header>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}

export default App;
