import React from 'react';

type State = {
  keyValue: string;
};

export class App extends React.PureComponent {
  state: State = {
    keyValue: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentPressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentPressKey);
  }

  handleDocumentPressKey = (event: KeyboardEvent) => {
    this.setState({ keyValue: event.key });
  };

  render() {
    const { keyValue } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { keyValue ? `The last pressed key is [${keyValue}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
