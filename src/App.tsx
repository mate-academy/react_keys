import React from 'react';

interface AppState {
  pressedKey: string;
}

export class App extends React.Component<AppState> {
  state: AppState = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
    <div className="App">
      <p className="App__message">{this.state.pressedKey}</p>
    </div>
    );
  }
}

