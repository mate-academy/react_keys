import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey !== null
            ? `The last pressed key is ${this.state.pressedKey}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
