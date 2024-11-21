import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey ? (
            <p>Nothing was pressed yet</p>
          ) : (
            <p>The last pressed key is [{this.state.pressedKey || 'None'}]</p>
          )}
        </p>
      </div>
    );
  }
}
