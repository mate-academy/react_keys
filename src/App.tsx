import React from 'react';

export class App extends React.Component {
  state = {
    keyboardPresedKey: '',
  };

  handleKeyboardPresedKey = (event: KeyboardEvent) => {
    this.setState({ keyboardPresedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardPresedKey);
  }

  render() {
    const { keyboardPresedKey } = this.state;

    return (
      <div className="App">
        {keyboardPresedKey ? (
          <p className="App__message">
            The last pressed key is [{keyboardPresedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
