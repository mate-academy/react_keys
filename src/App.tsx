import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [wasKlicked, setWasClicked] = useState(false);
  const [lastKey, setLastKey] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: KeyboardEvent) => {
      setWasClicked(true);
      setLastKey(event.key);
    };

    window.addEventListener('keydown', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, []);

  return (
    <div className="App">
      {wasKlicked ? (
        <p className="App__message">The last pressed key is [{lastKey}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
