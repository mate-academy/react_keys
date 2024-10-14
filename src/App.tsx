import React, { useState } from 'react';
import { Message } from './components/Message/';

export const App: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <Message message={message} setMessage={setMessage} />
    </div>
  );
};
