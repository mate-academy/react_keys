import React,
{ /* useState, useEffect */ } from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState('Nothing was pressed yet');

//   useEffect(() => {
//     const handleKeyUp = (event: KeyboardEvent) => {
//       setPressedKey(`The last pressed key is [${event.key}]`);
//     };

//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <p className="App__message">{pressedKey}</p>
//     </div>
//   );
// };
