import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: 'Nothing was pressed yet',
  };

  handleKey = () => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  };

  componentDidMount() {
    this.handleKey()
  }

  render() {
    return (
      <div className="App">
      <p className="App__message">The last pressed key is {this.state.key}</p>
      </div>
    );
  }
}
