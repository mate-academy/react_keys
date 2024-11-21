import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState(null);

  const handleKeyPress = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      {!pressedKey ?
        <p className="App__message">Nothing was pressed yet</p>
        :
        (<p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
)}
    </div>
  );
};
