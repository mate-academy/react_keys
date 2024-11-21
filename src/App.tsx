import React from 'react';

type State = {
  pressedKey: null | string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  render() {
    const key = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
