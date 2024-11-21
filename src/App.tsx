import React from 'react';

interface State {
  lastKeyPressed: string | null;
}

export class App extends React.Component {
  state: State = {
    lastKeyPressed: null,
  };

  listenerId = 0;

  setLastKeyPressed = (event: KeyboardEvent) => {
    this.setState({ lastKeyPressed: event.key });
  };

  componentDidMount() {
    this.setState({
      listenerId: document.addEventListener('keyup', this.setLastKeyPressed),
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.setLastKeyPressed);
  }

  render() {
    const { lastKeyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKeyPressed
            ? `The last pressed key is [${lastKeyPressed}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
