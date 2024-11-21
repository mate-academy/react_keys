import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? `Nothing was pressed yet`
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
