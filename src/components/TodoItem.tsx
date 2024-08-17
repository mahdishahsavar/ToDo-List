// src/components/TodoItem.tsx
import React from 'react';

interface TodoItemProps {
  todo: { id: number; title: string; description: string; completed: boolean; color: string };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onTitleEdit: (id: number, title: string) => void;
  onDescriptionEdit: (id: number, description: string) => void;
  onColorChange: (id: number, color: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onTitleEdit, onDescriptionEdit, onColorChange }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    onColorChange(todo.id, newColor);
  };

  return (
    <div className="todo-item" style={{ backgroundColor: todo.color }}>
      <div className="todo-checkbox">
        <label>Completed</label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>
      <div className="todo-content">
        <input
          type="text"
          value={todo.title}
          onChange={(e) => onTitleEdit(todo.id, e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={todo.description}
          onChange={(e) => onDescriptionEdit(todo.id, e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className="todo-controls">
        <select value={todo.color} onChange={handleColorChange}>
          <option value="#ffffff">White</option>
          <option value="#f28b82">Red</option>
          <option value="#fbbc04">Orange</option>
          <option value="#fff475">Yellow</option>
          <option value="#ccff90">Green</option>
          <option value="#a7ffeb">Teal</option>
          <option value="#cbf0f8">Blue</option>
          <option value="#d7aefb">Purple</option>
        </select>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
