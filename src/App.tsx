import React from 'react';

type State = {
  lastKeyPressed: string | null;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    lastKeyPressed: null,
  };

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ lastKeyPressed: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyPressed);
  }

  render(): React.ReactNode {
    const { lastKeyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKeyPressed
            ? `The last pressed key is [${lastKeyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
