import React from 'react';

export class App extends React.Component {
  state = {
    currentState: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ currentState: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {
      this.setState({ currentState: 'Nothing was pressed yet' });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{`${this.state.currentState}`}</p>
      </div>
    );
  }
}
