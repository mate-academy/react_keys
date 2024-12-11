import React from 'react';

type State = {
  pressedKey: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: false,
  };

  keyClicked: string | undefined;

  keyHandler = (e: { key: string | undefined }) => {
    this.setState({ pressedKey: true });
    this.keyClicked = e.key;
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keyHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.keyHandler);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.keyClicked}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
