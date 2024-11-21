import React from 'react';

type State = {
  lastKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastKey: null,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        {lastKey ? (
          <p className="App__message">The last pressed key is [{lastKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
