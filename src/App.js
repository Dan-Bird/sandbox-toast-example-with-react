import React from 'react';
import { ToastContextProvider } from './contexts/ToastContext';
import UserInput from './UserInput';

function App() {
  return (
    <ToastContextProvider>
      <UserInput />
    </ToastContextProvider>
  );
}

export default App;
