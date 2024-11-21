import React from 'react';

interface State {
  key: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {!key ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}

export default App;
