import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKey);
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
