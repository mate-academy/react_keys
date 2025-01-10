import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {
      this.setState({ pressedKey: null });
    });
  }

  render() {
    if (this.state.pressedKey === null) {
      return <p className="App__message">Nothing was pressed yet</p>;
    } else if (this.state.pressedKey !== null) {
      return (
        <p className="App__message">
          The last pressed key is [{this.state.pressedKey}]
        </p>
      );
    }
  }
}
