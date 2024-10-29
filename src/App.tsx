import React from 'react';

type State = {
  query: string;
};
export class App extends React.Component {
  state: Readonly<State> = {
    query: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ query: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ query: event.key });
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="App">
        {query ? (
          <p className="App__message">The last pressed key is [{query}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
