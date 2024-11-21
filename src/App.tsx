import React from 'react';

type State = {
  keyValue: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    keyValue: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyValue: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return !this.state.keyValue ? (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    ) : (
      <div className="App">
        <p className="App__message">
          The last pressed key is [{this.state.keyValue}]
        </p>
      </div>
    );
  }
}
