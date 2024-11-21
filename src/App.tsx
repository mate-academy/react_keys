import React, { useState, useEffect, useCallback } from 'react';

export const App: React.FC = () => {
  const [keyPress, setKeyPress] = useState<string | null>(null);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    setKeyPress(event.key);
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  });

  return (
    <div className="App">
      <p className="App__message">
        {keyPress
          ? `The last pressed key is [${keyPress}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
