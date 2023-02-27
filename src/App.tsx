import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.setKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.setKey);
  }

  setKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key
          ? (<p className="App__message">{`The last pressed key is [${key}]`}</p>)
          : (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    );
  }
}
