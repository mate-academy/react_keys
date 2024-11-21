import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component {
  state: State = {
    lastPressedKey: '',
  };

  hendleKeyPressed = (event: KeyboardEvent) =>
    this.setState({ lastPressedKey: event.key });

  componentDidMount() {
    document.addEventListener('keyup', this.hendleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.hendleKeyPressed);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
