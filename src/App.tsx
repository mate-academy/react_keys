import React from 'react';

type State = {
  noKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    noKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      noKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.noKey}
        </p>
      </div>
    );
  }
}
