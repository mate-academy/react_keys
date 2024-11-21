import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() :void {
    document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() :void {
    document.removeEventListener('keydown', this.onKeyPress);
  }

  onKeyPress = (event: KeyboardEvent) :void => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey}
        </p>
      </div>
    );
  }
}
