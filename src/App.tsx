import React from 'react';

type State = {
  keyup: string;
};

export class App extends React.PureComponent {
  state: State = {
    keyup: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentPressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentPressKey);
  }

  handleDocumentPressKey = (event: KeyboardEvent) => {
    this.setState({ keyup: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyup
            ? `The last pressed key is [${this.state.keyup}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
