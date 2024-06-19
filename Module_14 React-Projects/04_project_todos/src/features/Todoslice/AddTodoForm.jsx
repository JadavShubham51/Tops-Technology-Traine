// src/AddTodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function AddTodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({
      id: Date.now(),
      text,
      completed: false
    }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
