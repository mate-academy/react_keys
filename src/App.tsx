import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Nothing was pressed yet');

  const handleKeyPress = (event: KeyboardEvent) => {
    setMessage(`The last pressed key is [${event.key}]`);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
