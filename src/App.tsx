import React from 'react';

type State = {
  keyPressed: string | null;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    keyPressed: null,
  };

  handleClick = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed
            ? `The last pressed key is [${this.state.keyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
