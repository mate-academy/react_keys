import React from 'react';

type State = {
  firstRender: boolean,
  pressedKey: string,
};

export class App extends React.Component {
  state: State = {
    firstRender: true,
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({ firstRender: false, pressedKey: event.key });
  };

  render() {
    const { firstRender, pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!firstRender ? (
            `The last pressed key is [${pressedKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
