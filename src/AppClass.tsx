import React from 'react';

type State = {
  key: string;
};

export class App extends React.PureComponent<{}, State> {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key ? (
            `The last pressed key is [${this.state.key}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
