import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const title = this.state.pressedKey
      ? `The last pressed key is [${this.state.pressedKey}]`
      : `Nothing was pressed yet`;

    return (
      <div className="App">
        <p className="App__message">{title}</p>
      </div>
    );
  }
}
