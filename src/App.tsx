import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyPress(event: KeyboardEvent) {
    this.setState({
      pressedKey: event.key,
    });
  }

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyPress(event);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyPress(event);
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
