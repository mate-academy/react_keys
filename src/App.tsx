import React from 'react';

export class App extends React.Component {
  state = {
    keyPress: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyPress: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPress
            ? `The last pressed key is [${this.state.keyPress}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
