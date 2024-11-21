import React from 'react';

type State = {
  lastKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: null,
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
