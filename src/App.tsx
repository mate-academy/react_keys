import { Component } from 'react';

type State = {
  onKeyPress: string;
};

export class App extends Component {
  state: Readonly<State> = {
    onKeyPress: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ onKeyPress: event.key });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.componentDidMount);
  }

  render() {
    const { onKeyPress } = this.state;

    return (
      <div className="App">
        {onKeyPress !== '' ? (
          <p className="App__message">The last pressed key is [{onKeyPress}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
