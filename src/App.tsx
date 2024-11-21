import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressedKey: '',
  };

  hendleKeyPress = (event: KeyboardEvent) =>
    this.setState({ lastPressedKey: event.key });

  componentDidMount() {
    document.addEventListener('keyup', this.hendleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.hendleKeyPress);
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
