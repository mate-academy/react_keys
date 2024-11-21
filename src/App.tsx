import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyPress);
  }

  handlerKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

/* export const App: React.FC = () => (
  <div className="App">
    <p className="App__message">The last pressed key is [Enter]</p>
  </div>
); */
