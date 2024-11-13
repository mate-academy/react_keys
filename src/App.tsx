import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${e.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
