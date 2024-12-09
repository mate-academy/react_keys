import React from 'react';

type State = {
  letter: string;
};

export class App extends React.Component<State> {
  state: State = {
    letter: '',
  };

  keyboardLisener = (event: KeyboardEvent) => {
    this.setState({ letter: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardLisener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardLisener);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.letter
            ? `The last pressed key is [${this.state.letter}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
