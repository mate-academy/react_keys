import React from 'react';
type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  keyboardEventHandler = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardEventHandler);
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
