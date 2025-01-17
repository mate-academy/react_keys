import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    const message =
      pressedKey === null
        ? 'Nothing was pressed yet'
        : `The last pressed key is [${pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
