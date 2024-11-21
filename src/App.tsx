import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = { pressedKey: '' };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
