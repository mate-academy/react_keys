import React from 'react';

type State = {
  keyName: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    keyName: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  shouldComponentUpdate(_: Readonly<{}>, nextState: Readonly<State>): boolean {
    return nextState.keyName !== this.state.keyName;
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ keyName: event.key });
  };

  render() {
    const { keyName } = this.state;

    return (
      <div className="App">
        {keyName ? (
          <p className="App__message">
            {`The last pressed key is [${keyName}]`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
