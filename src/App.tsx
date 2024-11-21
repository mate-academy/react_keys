import React from 'react';

type Props = {};

type State = {
  pressedKey: string,
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
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
        {
          pressedKey
            ? <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}
