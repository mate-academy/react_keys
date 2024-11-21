import React from 'react';

type State = {
  key: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    key: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

// SAME COMPONENT, BUT FUNCTIONAL

// import React, { useEffect, useState } from 'react';

// export const App: React.FC = () => {
//   const [key, setKey] = useState('');

//   useEffect(() => {
//     const handleKeyPress = (event: KeyboardEvent) => {
//       setKey(event.key);
//     };

//     document.addEventListener('keyup', handleKeyPress);

//     return () => document.removeEventListener('keyup', handleKeyPress);
//   }, []);

//   return (
//     <div className="App">
//       {key ? (
//         <p className="App__message">The last pressed key is [{key}]</p>
//       ) : (
//         <p className="App__message">Nothing was pressed yet</p>
//       )}
//     </div>
//   );
// };
