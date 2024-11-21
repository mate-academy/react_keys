import { Component } from 'react';

class App extends Component {
  state = {
    pressedKey: null,
  };

  handleKeyUp = (event: { key: unknown }) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

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
export default App;
