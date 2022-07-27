import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUp);
  }

  keyUp = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      this.setState({ pressedKey: 'Space' });
    } else {
      this.setState({ pressedKey: event.key });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey
          ? `The last pressed key is ${this.state.pressedKey}`
          : 'Nothing was pressed yet'}
      </div>
    );
  }
}
