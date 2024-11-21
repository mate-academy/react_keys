import React, { useEffect, useMemo, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string>('');

  const onKeyChange = (e: KeyboardEvent) => {
    setKey(e.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', onKeyChange);

    return () => {
      document.removeEventListener('keyup', onKeyChange);
    };
  }, []);

  const title = useMemo(() => {
    return `The last pressed key is [${key}]`;
  }, [key]);

  return (
    <div className="App">
      <p className="App__message">{key ? title : 'Nothing was pressed yet'}</p>
    </div>
  );
};
