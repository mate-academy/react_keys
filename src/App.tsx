import React from 'react';

type State = {
  activeKey: string | null;
};

export class App extends React.Component {
  state: State = {
    activeKey: null,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ activeKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { activeKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!activeKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${activeKey}]`}
        </p>
      </div>
    );
  }
}
