import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  keyboardEventHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardEventHandler);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
