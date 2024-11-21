import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component {
  state: State = {
    keyPressed: '',
  };

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? `The last pressed key is [${keyPressed}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
