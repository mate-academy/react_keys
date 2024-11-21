import React from 'react';

type State = {
  key: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    key: '',
  };

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.key
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.key}]`}
        </p>
      </div>
    );
  }
}
