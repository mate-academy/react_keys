import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUpEvent = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUpEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUpEvent);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
