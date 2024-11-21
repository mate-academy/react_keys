import React from 'react';

type State = {
  key: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.key ? (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
