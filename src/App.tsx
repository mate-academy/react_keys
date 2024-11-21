import { Component } from 'react';

type State = {
  pressedKey: boolean,
  keyName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: false,
    keyName: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.addEventKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.addEventKeyUp);
  }

  addEventKeyUp = (e: KeyboardEvent) => {
    if (e.key) {
      this.setState({ pressedKey: true, keyName: e.key });
    }
  };

  render() {
    const { pressedKey, keyName } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyName}]`}
        </p>
      </div>
    );
  }
}
