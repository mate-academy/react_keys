import React from 'react';

type State = {
  key: string | null,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  handleKeyEvent = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? (`The last pressed key is [${key}]`) : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
