import React from 'react';

export class App extends React.Component {
  state = {
    lastPressedKey: '',
  };

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastPressedKey
            ? `The last pressed key is [${this.state.lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
