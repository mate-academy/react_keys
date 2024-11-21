import React from 'react';

type State = {
  lastKeyPressed: string;
};

export class App extends React.Component {
  state: State = {
    lastKeyPressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ lastKeyPressed: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({
        pressedKey: event.key,
      });
    });
  }


  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.lastKeyPressed ? `The last pressed key is [${this.state.lastKeyPressed}]`: `Nothing was pressed yet`}</p>
      </div>
    );
  }
}
