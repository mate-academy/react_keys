import React from 'react';

export class App extends React.Component {
  state = {
    presedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyboardClick);
  }

  handleDocumentKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ presedKey: event.key });
  };

  render() {
    const { presedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {presedKey
            ? `The last pressed key is [${presedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
