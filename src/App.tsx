import React from 'react';

type Props = {
  pressedKey: string;
}
export class App extends React.Component {
  state: Props = {
    pressedKey: ''
  };

  handleButtonPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key })
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleButtonPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleButtonPress);
  }

  render() {
    const { pressedKey } = this.state
    return (
      <div className="App">
        <p className="App__message">{!pressedKey ? 'Nothing was pressed yet' : `The last pressed key is [${pressedKey}]`}</p>
      </div>
    )
  }
};
