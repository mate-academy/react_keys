import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setCurrentKey(event.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      {currentKey ? (
        <p className="App__message">The last pressed key is [{currentKey}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
