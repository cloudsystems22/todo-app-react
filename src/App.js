import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Isso é uma tarefa.",
      id: uuidv4()
    }
  ]);
  const [value, setValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if(value.trim() === "") return;

    setTodos([
      ...todos, 
      {
        text: value,
        id: uuidv4()
      },
    ]);
    setValue("");
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo}>
          <input
            autoFocus
            ref={input => input && input.focus()}
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            type="text" 
            placeholder="Add todo..."
          />
          <button type="submit">Add todo</button>
        </form>
        {todos.map(todo => (
          <div key={todo.id} className="todo">
            <p>{todo.text}</p>
            <span onClick={() => removeTodo(todo.id)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
