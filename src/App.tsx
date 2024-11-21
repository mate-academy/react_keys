import React, { Component } from 'react';

type KeyboardState = {
  letter: string;
};

export class App extends Component<{}, KeyboardState> {
  state: KeyboardState = {
    letter: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      letter: `[${event.key}]`,
    });
  };

  render() {
    const { letter } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {letter
            ? `The last pressed key is ${this.state.letter}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
