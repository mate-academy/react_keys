import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyChange);
  }

  handleKeyChange = (event: KeyboardEvent) => (
    this.setState({ pressedKey: event.key })
  );

  render(): React.ReactNode {
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
