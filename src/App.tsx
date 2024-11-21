import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<State> {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.key && (
          <p className="App__message">Nothing was pressed yet</p>
        )}
        {this.state.key && (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        )}
      </div>
    );
  }
}
