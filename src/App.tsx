import React from 'react';
//import { useEffect, useState } from 'react';

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState<string | null>(null);

//   useEffect(() => {
//     const handleClick = (event: KeyboardEvent) => {
//       setPressedKey(event.key);
//     };

//     document.addEventListener('keyup', handleClick);

//     return () => document.removeEventListener('keyup', handleClick);
//   }, []);

//   return (
//     <div className="App">
//       {pressedKey === null ? (
//         <p className="App__message">Nothing was pressed yet</p>
//       ) : (
//         <p className="App__message">The last pressed key is [{pressedKey}]</p>
//       )}
//     </div>
//   );
// };

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }

  private handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };
}
