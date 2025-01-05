import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: '',
  };

  handleKey = () => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  };

  componentDidMount() {
    this.handleKey();
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
