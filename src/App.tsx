import React from 'react';

type AppState = {
  lastKey: string | null;
};

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    lastKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ lastKey: event.key });
  };

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
