// src/MessageForm.js
import React, { useState } from 'react';
import { database } from './firebase';
import { ref, push } from 'firebase/database';

function MessageForm({ currentUser }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const messagesRef = ref(database, 'messages');
    const newMessage = {
      username: currentUser || 'Аноним',
      text: message,
      timestamp: Date.now()
    };
    push(messagesRef, newMessage);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default MessageForm;
