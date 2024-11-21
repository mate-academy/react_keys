import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  renderMessage() {
    const { pressedKey } = this.state;

    if (pressedKey === '') {
      return <p className="App__message">Nothing was pressed yet</p>;
    }

    return (
      <p className="App__message">The last pressed key is [{pressedKey}]</p>
    );
  }

  render() {
    return <div className="App">{this.renderMessage()}</div>;
  }
}
