import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
