import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePress);
  }

  handlePress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    const pressChecking = (pressedKey === '')
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">
          {pressChecking}
        </p>
      </div>
    );
  }
}
