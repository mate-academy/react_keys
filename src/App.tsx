/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

interface State {
  message: string
  lastClickedKey: string
}

export class App extends React.Component {
  state: State = {
    message: 'Nothing was pressed yet',
    lastClickedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      this.setState({
        message: 'The last pressed key is',
        lastClickedKey: e.key,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastClickedKey === ''
            ? this.state.message
            : `${this.state.message} [${this.state.lastClickedKey}]`}
        </p>
      </div>
    );
  }
}
