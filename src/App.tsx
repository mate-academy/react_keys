import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPress, setKeyPress] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeyPress(e.key);
    };
    document.addEventListener('keyup', handleKeyPress);
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {!keyPress
          ? `Nothing was pressed yet`
          : `The last pressed key is [${keyPress}]`}
      </p>
    </div>
  );
};
