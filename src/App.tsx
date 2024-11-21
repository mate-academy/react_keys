import React from 'react';

type State = {
  pressedButton: string;
};

export class App extends React.Component {
  state: State = {
    pressedButton: '',
  };

  handleKeyboardChange = (event: KeyboardEvent) => {
    this.setState({ pressedButton: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardChange);
  }

  render() {
    const { pressedButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedButton
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedButton}]`}
        </p>
      </div>
    );
  }
}
