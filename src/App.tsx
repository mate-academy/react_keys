import { Component } from 'react';

type State = {
  start: boolean,
  key: string,
};

export class App extends Component <{}, State> {
  state: Readonly<State> = {
    start: false,
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    this.setState({ start: false });
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
    this.setState({ start: true });
  };

  render() {
    const { start, key } = this.state;
    const str = start ? `The last pressed key is [${key}]` : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{str}</p>
      </div>
    );
  }
}
