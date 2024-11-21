import { Component } from 'react';

type State = {
  message: string;
};

export class App extends Component<{}, State> {
  state = {
    message: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (e: KeyboardEvent) => {
    this.setState({
      message: e.key,
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            message
              ? `The last pressed key is [${message}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
