import React from 'react';
import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
