// import React, { Component } from 'react';

// interface AppState {
//   pressedKey: string;
// }

// export class App extends Component<{}, AppState> {
//   state: AppState = {
//     pressedKey: 'Nothing was pressed yet',
//   };

//   handleKeyUp = (event: KeyboardEvent) => {
//     this.setState({ pressedKey: event.key });
//   };

//   componentDidMount() {
//     document.addEventListener('keyup', this.handleKeyUp);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keyup', this.handleKeyUp);
//   }

//   render() {
//     const { pressedKey } = this.state;

//     return (
//       <div className="App">
//         <p className="App__message">
//           {pressedKey === 'Nothing was pressed yet'
//             ? 'Nothing was pressed yet'
//             : `The last pressed key is [${pressedKey}]`}
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>(
    'Nothing was pressed yet',
  );

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey === 'Nothing was pressed yet'
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};

export default App;
