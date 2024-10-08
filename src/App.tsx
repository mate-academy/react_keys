import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.pressedKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
        )}
      </div>
    );
  }
}
