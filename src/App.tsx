import React from 'react';

type State = {
  text: string
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    text: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    const text = `The last pressed key is [${event.key}]`;

    this.setState({ text });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <p className="App__message">{text}</p>
      </div>
    );
  }
}
