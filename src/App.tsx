import React from 'react';

type State = Readonly<{
  lastPressedKey: string;
}>;

export class App extends React.Component {
  state: State = {
    lastPressedKey: '',
  };

  onPress = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onPress);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {!this.state.lastPressedKey && (
          <p className="App__message">Nothing was pressed yet</p>
        )}

        {this.state.lastPressedKey && (
          <p className="App__message">
            The last pressed key is [{this.state.lastPressedKey}]
          </p>
        )}
      </div>
    );
  }
}
