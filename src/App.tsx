/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  pressKey = (ev: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${ev.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}
