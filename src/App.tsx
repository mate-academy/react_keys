// import { event } from 'cypress/types/jquery';
import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');
  const title = !key
    ? 'Nothing was pressed yet'
    : `The last pressed key is [${key}]`;

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
      <p className="App__message">{title}</p>
    </div>
  );
};
