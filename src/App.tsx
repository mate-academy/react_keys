import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    this.setState({
      pressedKey: document.addEventListener('keyup', (event: KeyboardEvent) => {
        console.log(event.key);
      }),
    });
  }

  componentWillUnmount(): void {
    this.setState({
      pressedKey: document.removeEventListener(
        'keyup',
        (event: KeyboardEvent) => {
          console.log(event.key);
        },
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [{this.state.pressedKey}]
        </p>
      </div>
    );
  }
}
