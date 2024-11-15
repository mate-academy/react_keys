import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ message: `The last pressed key is [${key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
