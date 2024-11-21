import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey !== ''
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
