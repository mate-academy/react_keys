import React from 'react';

interface State {
  key: string;
}

export class App extends React.Component<void, State> {
  state = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { key } = this.state;
    const isKeyPressed = key !== '';
    return (
      <div className="App">
        <p className="App__message">
          {isKeyPressed
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const [key, setKey] = useState('');
//   const isKeyPressed = key !== '';

//   useEffect(() => {
//     const handleKeyUp = (event: KeyboardEvent) => {
//       setKey(event.key);
//     };

//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
// <div className="App">
//   <p className="App__message">
//     {isKeyPressed
//       ? `The last pressed key is [${key}]`
//       : 'Nothing was pressed yet'}
//   </p>
// </div>
//   );
// };
