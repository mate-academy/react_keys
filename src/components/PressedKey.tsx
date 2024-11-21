import React from 'react';

type State = {
  pressedKey: string | null;
};

export class PressedKey extends React.Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
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
