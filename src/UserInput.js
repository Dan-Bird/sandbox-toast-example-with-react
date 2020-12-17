import React, { useState } from 'react';
import useToastContext from './hooks/useToastContext';

export default function UserInput() {
  const [text, setText] = useState('');
  const addToast = useToastContext();

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    addToast(text);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit();
      setText('');
    }
  };

  return (
    <div className="app">
      <h1>Toasts Example</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button onClick={handleSubmit}>Show Toast</button>
    </div>
  );
}
