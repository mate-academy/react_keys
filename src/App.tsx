import { Component } from 'react';

type State = {
  pressedKey: string;
};

type Props = {};

export class App extends Component <Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.pressedKey ? ('Nothing was pressed yet')
              : (`The last pressed key is [${this.state.pressedKey}]`)
          }
        </p>
      </div>
    );
  }
}
