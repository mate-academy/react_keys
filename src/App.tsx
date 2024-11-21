import React from 'react';

interface State {
  lastPressKey: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressKey: '',
  };

  handlePress = (event: KeyboardEvent) => {
    this.setState({ lastPressKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePress);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.lastPressKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.lastPressKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
