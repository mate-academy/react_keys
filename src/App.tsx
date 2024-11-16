import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component {
  state: State = {
    keyPressed: '',
  };

  handleKeyPress = (event: KeyboardEvent): void => {
    this.setState(currentState => ({
      ...currentState,
      keyPressed: event.key,
    }));
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyPress(event);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    // const message = `The last pressed key is ${this.state.keyPressed}`;
    const message = this.state.keyPressed
      ? `The last pressed key is [${this.state.keyPressed}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
