import React from 'react';

type State = {
  keyPress: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    keyPress: null,
  };

  handlePress = (event: KeyboardEvent) => {
    this.setState({ keyPress: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePress);
  }

  render() {
    const { keyPress } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPress
            ? `The last pressed key is [${keyPress}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
