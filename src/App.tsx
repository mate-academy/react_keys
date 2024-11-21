import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  eventHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.eventHandler);
  }

  componentWillUnmount(): void {
    removeEventListener('keyup', this.eventHandler);
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
