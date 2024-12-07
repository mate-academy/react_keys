import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyHandler);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
