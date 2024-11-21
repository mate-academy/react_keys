import React from 'react';

type Props = {};

type State = {
  pressedKey?: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: undefined,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const currKey = event.key;

    if (currKey !== this.state.pressedKey) {
      this.setState({
        pressedKey: currKey,
      });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
