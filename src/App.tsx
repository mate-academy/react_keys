import React from 'react';

type State = {
  key: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

  handleDocumentKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {(this.state.key)
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
