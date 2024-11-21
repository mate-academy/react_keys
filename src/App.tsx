import React from 'react';

type State = {
  pressedKey: string;
};

class Key extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
    this.setState({ pressedKey: 'Nothing was pressed yet' });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

export const App: React.FC = () => <Key />;
