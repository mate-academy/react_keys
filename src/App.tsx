import React from 'react';

type State = {
  clickedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    clickedKey: '',
  };

  handleKeyClick = (event: KeyboardEvent) => {
    const clickedKey = event.key;

    this.setState({ clickedKey });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  render() {
    const { clickedKey } = this.state;
    const message = clickedKey
      ? `The last pressed key is [${clickedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
