import React from 'react';

interface State {
  currentKey: string,
}

export class App extends React.Component {
  state: State = {
    currentKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => (
      this.setState({ currentKey: event.key })
    ));
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => (
      this.setState({ currentKey: event.key })
    ));
  }

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey ? (
            `The last pressed key is [${currentKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const [currentKey, setCurrentKey] = useState('');

//   useEffect(() => {
//     document.addEventListener('keyup', (event: KeyboardEvent) => (
//       setCurrentKey(event.key)
//     ));

//     return () => {
//       document.removeEventListener('keyup', (event: KeyboardEvent) => (
//         setCurrentKey(event.key)
//       ));
//     };
//   }, []);

//   return (
//     <div className="App">
//       <p className="App__message">
//         {currentKey ? (
//           `The last pressed key is [${currentKey}]`
//         ) : (
//           'Nothing was pressed yet'
//         )}
//       </p>
//     </div>
//   );
// };
