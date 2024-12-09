import React from 'react';

type State = {
  currentButton: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    currentButton: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ currentButton: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { currentButton } = this.state;

    return (
      <div className="App">
        {currentButton ? (
          <p className="App__message">{`The last pressed key is [${currentButton}]`}</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
