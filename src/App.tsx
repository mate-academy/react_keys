import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressedKey: '',
  };

  handleKeyBoard = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyBoard);
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
