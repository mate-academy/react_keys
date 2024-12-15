import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  pushKeyboard = (event: KeyboardEvent) =>
    this.setState({ pressedKey: event.key });

  componentDidMount(): void {
    document.addEventListener('keyup', this.pushKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pushKeyboard);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
