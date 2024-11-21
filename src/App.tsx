import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string>('');

  useEffect(() => {
    const handleKeyBoardEvent = (event: KeyboardEvent) => {
      event.preventDefault();
      setKey(event.key);
    };

    document.addEventListener('keyup', handleKeyBoardEvent);

    return () => {
      document.removeEventListener('keyup', handleKeyBoardEvent);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : `Nothing was pressed yet`}
      </p>
    </div>
  );
};
