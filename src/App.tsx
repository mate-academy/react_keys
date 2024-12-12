import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>(
    'Nothing was pressed yet',
  );

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKey(`The last pressed key is [${event.key}]`);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{pressedKey}</p>
    </div>
  );
};
