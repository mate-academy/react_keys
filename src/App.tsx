import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpHandler);
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
