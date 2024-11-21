import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  handleDocumentKeybordClick = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key }, () => {});
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeybordClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeybordClick);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey
            ? `Nothing was pressed yet`
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
