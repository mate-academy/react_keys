import React from 'react';

interface AppState {
  pressedKey: '';
}

export class App extends React.Component<AppState> {
  state: AppState = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
