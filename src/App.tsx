import React from 'react';

// export const App: React.FC = () => {
//   return (
//     <div className="App">
//       <p className="App__message">Nothing was pressed yet</p>
//     </div>
//   );
// };

type State = {
  keyboardKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    keyboardKey: '',
  };

  handleKeyChange = (event: KeyboardEvent) => {
    this.setState({
      keyboardKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyChange);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyboardKey
            ? `The last pressed key is [${this.state.keyboardKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
