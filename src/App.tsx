import React from 'react';

export class App extends React.PureComponent {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.addKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.addKey);
  }

  addKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.key === ''
          && (<p className="App__message">Nothing was pressed yet</p>)}

        {this.state.key !== ''
          && (
            <p className="App__message">
              {`The last pressed key is [${this.state.key}]`}
            </p>
          )}
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState('');

//   useEffect(() => {
//     const addKey = (event: KeyboardEvent) => {
//       setPressedKey(event.key);
//     };

//     document.addEventListener('keyup', addKey);

//     return () => {
//       document.removeEventListener('keyup', addKey);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {pressedKey === ''
//       && (<p className="App__message">Nothing was pressed yet</p>)}

//       {pressedKey !== ''
//       && (
//         <p className="App__message">
//           {`The last pressed key is [${pressedKey}]`}
//         </p>
//       )}
//     </div>
//   );
// };
