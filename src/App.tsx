import React from 'react';

type State = {
  pressKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressKey: '',
  };

  handlePressKeyChange = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handlePressKeyChange);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlePressKeyChange);
  }

  render() {
    const { pressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressKey
            ? `The last pressed key is [${pressKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
