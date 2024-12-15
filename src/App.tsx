import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: undefined,
  };

  handleDocumentButtonClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentButtonClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentButtonClick);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
