import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerDocumentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerDocumentKeyUp);
  }

  handlerDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey === ''
              ? 'Nothing was pressed yet'
              : `The last pressed key is ${pressedKey}`
          }
        </p>
      </div>
    );
  }
}
