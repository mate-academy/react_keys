import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [entered, setEntered] = useState<string>('');
  const [enteredActive, setEnteredActive] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setEntered(event.key);
      setEnteredActive(true);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      setEntered('');
      setEnteredActive(false);
    };
  }, []);

  return (
    <div className="App">
      {enteredActive ? (
        <p className="App__message">The last pressed key is [{entered}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
