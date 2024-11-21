import React from 'react';

export class App extends React.PureComponent<{}, { pressedKey: string }> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyupEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyupEvent);
  }

  handleKeyupEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey ? (
            `The last pressed key is [${this.state.pressedKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
