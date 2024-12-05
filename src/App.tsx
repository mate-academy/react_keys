import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: null,
  };

  keyPressHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
