import React from 'react';

export class App extends React.Component {
  state = {
    keyPressed: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed}
        </p>
      </div>
    );
  }
}
