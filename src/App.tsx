import * as React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent): void => {
    this.setState({
      pressedKey: `[${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <h1 className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is ${this.state.pressedKey}`
            : 'Nothing was pressed yet'}
        </h1>
      </div>
    );
  }
}
