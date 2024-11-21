import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const content = !this.state.pressedKey
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${this.state.pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">
          {content}
        </p>
      </div>
    );
  }
}
