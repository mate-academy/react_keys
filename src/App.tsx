import React, { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      pressedKey: 'Nothing was pressed yet',
    };
  }

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
        <p className="App__message">
          {pressedKey === 'Nothing was pressed yet'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
