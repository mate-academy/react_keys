import React from 'react';

type State = {
  pressedKey?: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handlChangeOnPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlChangeOnPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlChangeOnPress);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
