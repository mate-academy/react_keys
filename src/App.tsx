import React from 'react';

type State = {
  key: string;
  pressed: boolean;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    key: '',
    pressed: false,
  };

  pressedKey = (ev: KeyboardEvent) =>
    this.setState({ key: ev.key, pressed: true });

  componentDidMount() {
    window.addEventListener('keydown', this.pressedKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressedKey);
  }

  render() {
    const { key, pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressed
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
