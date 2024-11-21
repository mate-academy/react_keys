import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  targetElement = document.querySelector('.App__message');

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    const { pressedKey } = this.state;
    const textContent
    = !pressedKey
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">{textContent}</p>
      </div>
    );
  }
}
