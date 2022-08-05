import React from 'react';

type State = {
  keyboardKey: string;
};

export class App extends React.Component {
  state:State = {
    keyboardKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (this.waitingForKey));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (this.waitingForKey));
  }

  waitingForKey = (event: KeyboardEvent) => {
    this.setState({ keyboardKey: event.key });
  };

  render() {
    const spaceHunter = this.state.keyboardKey === ' '
      ? 'The last pressed key is [space]'
      : `The last pressed key is [${this.state.keyboardKey}]`;

    return (
      <div className="App">
        <p className="App__message">
          { (this.state.keyboardKey.length === 0
            ? 'Nothing was pressed yet'
            : spaceHunter)}
        </p>
      </div>
    );
  }
}
