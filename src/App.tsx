import React from 'react';

interface State {
  activeKey: string;
}

export class App extends React.Component<State> {
  state: State = {
    activeKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ activeKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { activeKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {activeKey
            ? `The last pressed key is [${activeKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
