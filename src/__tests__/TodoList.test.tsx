// src/__tests__/TodoList.test.tsx
import '@testing-library/jest-dom';
//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('adds a new todo', () => {
  render(<TodoList />);
  
  const titleInput = screen.getByPlaceholderText('Title');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const addButton = screen.getByText('Add');

  fireEvent.change(titleInput, { target: { value: 'Test Title' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
  fireEvent.click(addButton);

  expect(screen.getByDisplayValue('Test Title')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Test Description')).toBeInTheDocument();
});
