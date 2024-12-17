import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component<State> {
  state = {
    keyPressed: '',
  };

  handleKeyboardPress = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardPress);
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? `The last pressed key is [${keyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
