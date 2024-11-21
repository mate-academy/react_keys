/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

interface Props {}

interface State {
  keyPress: string | null;
}

export class App2 extends React.Component<Props, State> {
  state: Readonly<State> = {
    keyPress: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyPress: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPress
            ? `The last pressed key is [${this.state.keyPress}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
