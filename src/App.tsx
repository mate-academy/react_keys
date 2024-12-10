import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: null,
  };

  handleEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleEvent);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
