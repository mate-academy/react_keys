import React, { useState } from 'react';

export const App: React.FC = () => {
  const [keydown, setKeydown] = useState<string | null>(null);

  const handleKeydown = (event: KeyboardEvent) => {
    setKeydown(event.key);
    document.removeEventListener('keydown', handleKeydown);
  };

  document.addEventListener('keydown', handleKeydown);

  return (
    <div className="App">
      {keydown ? (
        <p className="App__message">The last pressed key is [{keydown}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
