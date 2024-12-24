import React from 'react';

type State = {
  button: string;
  isButtonPressed: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    button: '',
    isButtonPressed: false,
  };

  handleKeyDown = (event: KeyboardEvent): void => {
    this.setState({ button: event.key });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.button ? (
          <p className="App__message">
            The last pressed key is [{this.state.button}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
