// src/MessageList.js
import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = data ? Object.entries(data).map(([key, value]) => ({ id: key, ...value })) : [];
      setMessages(messagesList);
    });

    // Очистка слушателя при размонтировании компонента
    return () => unsubscribe();
  }, []);

  return (
    <ul className="messages">
      {messages.map((msg) => (
        <li key={msg.id}>
          <strong>{msg.username}:</strong> {msg.text}
        </li>
      ))}
    </ul>
  );
}

export default MessageList;
