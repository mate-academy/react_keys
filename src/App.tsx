import React from 'react';

type State = {
  key: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    key: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
