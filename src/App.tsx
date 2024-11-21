import React from 'react';

type State = {
  message: string,
};

export class App extends React.Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keypressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keypressHandler);
  }

  keypressHandler = (event: KeyboardEvent) => {
    const eventKeyName = event.code === 'Space'
      ? event.code
      : event.key;

    this.setState({ message: `The last pressed key is [${eventKeyName}]` });
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
