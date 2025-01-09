import React, { useEffect, useRef, useState } from 'react';

export const App: React.FC = () => {
  const [firstView, setFirstView] = useState(true);
  const firstRender = useRef(true);
  const [pressedKey, setPressedKey] = useState('null');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKey(event.key);

      if (setFirstView) {
        setFirstView(false);
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);
  });

  return (
    <div className="App">
      {firstView ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      )}
    </div>
  );
};
