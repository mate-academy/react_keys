import React from 'react';

type State = {
  pressedKey: string;
  showMessage: boolean;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
    showMessage: true,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    this.setState({ showMessage: false });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { pressedKey, showMessage } = this.state;

    return (
      <div className="App">
        {showMessage ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
