import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component< {}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  // componentWillUnmount(): void {
  //   document.removeEventListener()
  // }

  render() {
    const message = this.state.pressedKey !== null ? `The last pressed key is [${this.state.pressedKey}]` : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
