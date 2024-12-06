import React from 'react';

type State = {
  keyPressed: '';
};
export class App extends React.Component {
  state: State = {
    keyPressed: '',
  };

  handleKeyboardChange = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardChange);
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {!keyPressed ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{keyPressed}]</p>
        )}
      </div>
    );
  }
}
