import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKeyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKeyEvent);
  }

  pressedKeyEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedKey }
        </p>
      </div>
    );
  }
}
