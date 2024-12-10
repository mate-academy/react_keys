/* eslint-disable react/no-deprecated */
import React from 'react';

export class App extends React.Component {
  state = {
    currentKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey !== null
            ? `The last pressed key is [${currentKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
