import React from 'react';

export class App extends React.Component {
  state = {
    lastPressedButton: null,
  };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ lastPressedButton: event.key });
  };

  componentDidMount = () => {
    window.addEventListener('keyup', this.handlePressedKey);
  };

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    const { lastPressedButton } = this.state;

    return (
      <div className="App">
        {lastPressedButton ? (
          <p className="App__message">
            The last pressed key is [{lastPressedButton}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
