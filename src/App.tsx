import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = React.useState<string>('');

  const handleKeyUp = (event: KeyboardEvent) => {
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
