// src/App.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const handleSetUsername = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value.trim();
    if (name) {
      setUsername(name);
    }
  };

  if (!username) {
    return (
      <div className="username-container">
        <h2>Введите ваше имя</h2>
        <form onSubmit={handleSetUsername}>
          <input type="text" name="username" placeholder="Имя пользователя" required />
          <button type="submit">Начать чат</button>
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Чат-приложение на React и Firebase</h1>
      <div className="chat-container">
        <MessageList />
        <MessageForm currentUser={username} />
      </div>
    </div>
  );
}

export default App;
