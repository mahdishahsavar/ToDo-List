// src/components/TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; title: string; description: string; completed: boolean; color: string }[]>([]);

  const addTodo = (title: string, description: string) => {
    const newTodo = { id: Date.now(), title, description, completed: false, color: '#ffffff' };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTitle = (id: number, title: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title } : todo));
  };

  const editDescription = (id: number, description: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, description } : todo));
  };

  const changeColor = (id: number, color: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, color } : todo));
  };

  // Sort todos: incomplete at the top, completed at the bottom
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="todo-list-container">
      <div className="add-todo-container">
        <AddTodo onAdd={addTodo} />
      </div>
      <div className="todo-list">
        {sortedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onTitleEdit={editTitle}
            onDescriptionEdit={editDescription}
            onColorChange={changeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
