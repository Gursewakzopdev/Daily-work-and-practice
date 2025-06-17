import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build a project']);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
export {TodoList};