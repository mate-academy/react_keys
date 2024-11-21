import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerClickKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerClickKey);
  }

  handlerClickKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;
    const message: string = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div>
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
