/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

interface Props {}

interface State {
  keyPressed: string | null;
}

export class App2 extends React.Component<Props, State> {
  state: Readonly<State> = {
    keyPressed: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ keyPressed: e.key });
  };

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
