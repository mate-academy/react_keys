import { Component } from 'react';

type State = {
  newKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    newKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventCallback);
  }

  eventCallback = (ev: KeyboardEvent) => {
    this.setState({ newKey: ev.key });
  };

  render() {
    const { newKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(newKey && `The last pressed key is [${newKey}]`) || 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
