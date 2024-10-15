import React from 'react';

type State = {
  selectKey: string;
};

export class App extends React.Component<State> {
  state = {
    selectKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ selectKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { selectKey } = this.state;

    return (
      <div className="App">
        {selectKey ? (
          <p className="App__message">The last pressed key is [{selectKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
