import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;
    const text = pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{text}</p>
      </div>
    );
  }
}
