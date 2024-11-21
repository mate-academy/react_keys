import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressFunction);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressFunction);
  }

  handleKeyPressFunction = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === '' ? 'Nothing was pressed yet' : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
