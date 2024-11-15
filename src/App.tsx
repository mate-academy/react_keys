import React from 'react';

type State = {
  message: string;
  value: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    message: '',
    value: '',
  };

  componentDidMount(): void {
    this.setState({ message: 'Nothing was pressed yet' });

    document.addEventListener('keyup', this.keyEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyEvent);
  }

  keyEvent = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is ${event.key}`,
      value: event.key,
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
