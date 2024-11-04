import React from 'react';

type Props = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Props = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: 'The last pressed key is ' + '[' + event.key + ']',
    });
  };

  componentDidMount() {
    window.document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    window.document.removeEventListener('keyup', this.handleKeyPressed);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

export default App;
