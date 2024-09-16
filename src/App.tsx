import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  handlerKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
