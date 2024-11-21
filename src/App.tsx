import { Component } from 'react';

type State = {
  pressedKey : string,
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => (
    event.code === 'Space'
      ? this.setState({ pressedKey: event.code })
      : this.setState({ pressedKey: event.key })
  );

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
