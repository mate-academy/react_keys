import { useEffect } from 'react';

interface Props {
  message: string;
  setMessage: (mes: string) => void;
}

export const Message: React.FC<Props> = ({ message, setMessage }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key) {
        setMessage(event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <p className="App__message">
      {message
        ? `The last pressed key is [${message}]`
        : 'Nothing was pressed yet'}
    </p>
  );
};
