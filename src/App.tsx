import React from 'react';

// #region Prors
type State = {
  key: string;
};
// #endregion

export class App extends React.Component<State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    return document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount(): void {
    return document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
