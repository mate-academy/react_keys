import React from 'react';

type State = {
  pressedKey: boolean;
  key: string;
};

export class App extends React.Component<State> {
  state = {
    pressedKey: true,
    key: '',
  };

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: false, key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  render() {
    const { pressedKey, key } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}
